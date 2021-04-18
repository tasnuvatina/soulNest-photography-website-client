import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Services.css";


const Services = () => {
  let [services,setServices]=useState([]);
  useEffect(()=>{
    let url='http://localhost:5000/services';
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
      setServices(data);
    })
  },[services])
  return (
    <div className="my-5">
      <h2 className="text-center text-dark pt-5 cormorant-font">SERVICE PLANS</h2>
      <p className="text-center text-dark mulish-font">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod assumenda
        doloremque deleniti. Ea, ut rem!
      </p>
      <div className="row w-100 text-center my-5 mx-0">
        {services.map((service) => (
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="service-card">
            <div><img className='card-img' src={service.imageURL} alt=""/></div>
              <h4 className="my-3 cormorant-font">{(service.name).toUpperCase()}</h4>
              <h5 className='cormorant-font'><em><span>$</span><span> {service.price}</span><span>/day</span></em></h5>
              <small className=' p-3 mulish-font'>{service.description}</small>

              <div><Link to={`/user/booking/${service._id}`}><button  className="btn-style my-3">Purchase</button></Link></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
