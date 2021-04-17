import React, { useEffect, useState } from "react";
import './BookingList.css'

const BookingList = ({ email }) => {
  let [bookings, setBookings] = useState([]);
  useEffect(() => {
    let url = `http://localhost:5000/getBookings/${email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBookings(data));
  }, [bookings]);
  return (
    <div className="container">
    <h3 className='text-center mb-4 cormorant-font'>YOUR BOOKINGS</h3>
      <div className="row w-100 text-center mx-0">
        {bookings.map((booking) => (
          <div className="col-md-6">
            <div className='p-4 my-3 booking-card'>
            <div className='d-flex justify-content-between align-items-center'><div><img style={{width:'50px'}}src={booking.serviceImage} alt=""/></div><div><button className={booking.status==='Pending' && 'pending'||booking.status==='Done' && 'done'||booking.status==='On going' && 'on-going'}>{booking.status}</button></div></div>
              <h4 className='mb-3 cormorant-font font-weight-bold'>{booking.serviceName}</h4>
              <small className='text-dark text-justify mulish-font'>{booking.serviceDescription}</small>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingList;
