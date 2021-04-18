import React, { useEffect, useState } from 'react';
import './Testimonial.css'


const Testimonial = () => {
    let [testimonials,setTestimonials]=useState([]);
    useEffect(()=>{
        let url='http://localhost:5000/getAllReviews'
        fetch(url)
        .then(res=>res.json())
        .then(data=>setTestimonials(data))
    },[])
    return (
      <div className='my-5 py-5'>
      <h2 className='text-dark text-center  mb-5 cormorant-font'>TESTIMONIALS</h2>
        <div className='row w-100 text-center mx-0 '>
            {
                testimonials.map(testimonial=><div className='col-lg-4 col-md-6 col-sm-12 mb-3'><div className='testimonial-card'>
                <div><img className='tesimonial-pic' src={testimonial.pic} alt=""/></div>
                <h2 className='text-dark lobster-text my-3'><span>{testimonial.brideName}</span> & <span>{testimonial.groomName}</span></h2>
                <p className='mulish-font'>{testimonial.description}</p>
                </div>
                </div>)
            }
        </div>
      </div>
    );
};

export default Testimonial;