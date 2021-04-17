import React, { useContext } from 'react';
import { useParams, useRouteMatch } from 'react-router';
import UserNavbar from '../../UserNavbar/UserNavbar';
import Booking from '../Booking/Booking';
import Review from '../Review/Review';
import { Link} from 'react-router-dom';
import './User.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { userContext } from '../../../App';
import BookingList from '../BookingList/BookingList';

const User = () => {
  let {loggedInUser, setLoggedInUser,isUserLoggedIn,setIsUserLoggedIn}=useContext(userContext);
    let { task,id } = useParams();
    
    console.log(task,id);
    console.log('id',id);

    
    return (
      <div>
        <UserNavbar></UserNavbar>
        <div className="row w-100 ">
          <div className="col-md-3">
          <div className='sidebar-main'>
            <div className='sidebar-div'>
            <div className='my-2'><Link to={`/user/booking/${id}`}><span><FontAwesomeIcon icon={faShoppingCart} /></span> Booking</Link></div>
            <div className='my-2'><Link to={`/user/bookingList/${loggedInUser.email}`}><span><FontAwesomeIcon icon={faShoppingBasket} /></span> Booking List</Link></div>
            <div className='my-2'><Link to={`/user/review/${loggedInUser.email}`}><span><FontAwesomeIcon icon={faCommentAlt} /></span> Review</Link></div>
            </div>
        </div>
          </div>
          <div className="col-md-9">
          <div>
          {task === "booking" && <Booking id={id}></Booking>}
        </div>
        <div>{task === "bookingList" && <BookingList email={loggedInUser.email}></BookingList>}</div>
        <div>{task === "review" && <Review></Review>}</div>
          </div>
          
        </div>
      </div>
    );
};

export default User;