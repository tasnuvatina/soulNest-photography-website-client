import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../App";
import { useForm } from "react-hook-form";
import ProcessPayment from "./ProcessPayment";
import { useParams, useRouteMatch } from "react-router";

const Booking = ({id}) => {
  console.log(id);
  let [service,setService]=useState({});
  useEffect(()=>{
    let url=`https://limitless-peak-51272.herokuapp.com/singleService/${id}`
    fetch(url)
    .then(res=>res.json())
    .then(data=>setService(data))
  },[])
  let {
    loggedInUser,
    setLoggedInUser,
    isUserLoggedIn,
    setIsUserLoggedIn
  } = useContext(userContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className='container mulish-font'>
        {
          service.name ? <div><h3 className='text-center mb-4 cormorant-font'>MAKE A BOOKING</h3>
        <input className='form-control my-3' value={loggedInUser.name} />
        <input className='form-control my-3' value={loggedInUser.email} />
        <input className='form-control my-3' value={service.name} />
        <p>This service will cost   ${service.price}</p>
        <h5>Payment:</h5>
        <ProcessPayment service={service}></ProcessPayment></div>
        : <div className='text-center'> <h5>Please Select a Service First !!</h5></div>
        }
        
      
      
    </div>
  );
};

export default Booking;
