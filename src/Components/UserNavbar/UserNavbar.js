import React, { useContext, useState } from 'react';
import { NavLink, Router } from "react-router-dom";
import "./UserNavbar.css";
import logo from '../../images/logo.png'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { userContext } from '../../App';



const UserNavbar = () => {
  let {
    loggedInUser,
    setLoggedInUser,
    isUserLoggedIn,
    setIsUserLoggedIn,
  } = useContext(userContext);
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
          <img style={{width:'150px'}} src={logo} alt=""/>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
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

export default UserNavbar;