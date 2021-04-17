import React, { useContext } from 'react';
import { useParams } from 'react-router';
import UserNavbar from '../../UserNavbar/UserNavbar';

import { Link} from 'react-router-dom';
import './Admin.css';
import OrderList from '../OrderList/OrderList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faShoppingBasket, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import AddService from '../AddService/AddService';
import { userContext } from '../../../App';
import ManageService from '../ManageService/ManageService';
import MakeAdmin from '../MakeAdmin/MakeAdmin'

const User = () => {
    let { adminTask ,email} = useParams();
    let {loggedInUser, setLoggedInUser,isUserLoggedIn,setIsUserLoggedIn}=useContext(userContext);

    
    return (
      <div>
        <UserNavbar></UserNavbar>
        <div className="row w-100 ">
          <div className="col-md-3">
          <div className='sidebar-main'>
            <div className='sidebar-div'>
            <div className='my-2'><Link to={`/admin/orderList/${loggedInUser.email}`}><span><FontAwesomeIcon icon={faShoppingCart} /></span> Order List</Link></div>
            <div className='my-2'><Link to={`/admin/addService/${loggedInUser.email}`}><span><FontAwesomeIcon icon={faShoppingBasket} /></span> Add Service</Link></div>
            <div className='my-2'><Link to={`/admin/makeAdmin/${loggedInUser.email}`}><span><FontAwesomeIcon icon={faCommentAlt} /></span> Make Admin</Link></div>
            <div className='my-2'><Link to={`/admin/manageService/${loggedInUser.email}`}><span><FontAwesomeIcon icon={faCommentAlt} /></span> Manage Service</Link></div>
            </div>
        </div>
          </div>
          <div className="col-md-9">
          <div>
          {adminTask === "orderList" && <OrderList></OrderList>}
        </div>
        <div>{adminTask === "addService" && <AddService></AddService>}</div>
        <div>{adminTask === "makeAdmin" && <MakeAdmin></MakeAdmin> }</div>
        <div>{adminTask === "manageService" && <ManageService></ManageService>}</div>
          </div>
          
        </div>
      </div>
    );
};

export default User;