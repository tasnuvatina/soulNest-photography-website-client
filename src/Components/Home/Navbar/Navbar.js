import React, { useContext, useEffect, useState } from 'react';
import { NavLink, Router } from "react-router-dom";
import './Navbar.css'
import logo from '../../../images/logo.png'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { userContext } from '../../../App';

//firebase
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    let [isAdmin,setIsAdmin]=useState(false)
    let {
      loggedInUser,
      setLoggedInUser,
      isUserLoggedIn,
      setIsUserLoggedIn,
    } = useContext(userContext);
    let handleSignOut=()=>{
      firebase.auth().signOut().then(() => {
        console.log('signed out');
        setIsUserLoggedIn({});
        setIsUserLoggedIn(false);
      }).catch((error) => {
        console.log(error);
      });
    }
   
    const CheckAdmin=()=>{
      useEffect(()=>{
        let url=`http://localhost:5000/getAdmin/${loggedInUser.email}`
        fetch(url)
        .then(res=>res.json())
        .then(data=>setIsAdmin(data))
      },[])
    }
    if(loggedInUser.email){
      CheckAdmin()
    }
    
    return (
        <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img style={{width:'150px'}} src={logo} alt=""/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink
                exact
                to="/home"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={`/user/bookingList/${loggedInUser.email}`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Bookings
              </NavLink>
            </li>
            {
              isAdmin && <li className="nav-item">
              <NavLink
                exact
                to={`/admin/orderList/${loggedInUser.email}`}
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Admin
              </NavLink>
            </li>
            }
            

            
            {!isUserLoggedIn && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Log In
                </NavLink>
              </li>
            )}
            {isUserLoggedIn && (
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleSignOut}
                >
                  Log Out
                </NavLink>
              </li>
            )}
            {isUserLoggedIn && (
              <li className="nav-item">
                <h5 className="nav-links">{loggedInUser.name}</h5>
              </li>
            )}
          </ul>
          <div className="nav-icon" onClick={handleClick}>
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </>
    );
};

export default Navbar;