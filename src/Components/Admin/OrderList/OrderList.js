import React, { useEffect, useState } from "react";
const OrderList = () => {
  let [orders, setOrders] = useState([]);
  useEffect(() => {
    let url = "http://localhost:5000/getAllBooking";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [orders]);
  const handleSelect=(id,e)=>{
      let url=`http://localhost:5000/updateBookingStatus/${id}`
      fetch(url,{
          method:'PATCH',
          headers:{
            "Content-type": "application/json"
          },
          body:JSON.stringify({status:e.target.value})
      })
      .then(res=>res.json())
      .then(data=>{
          console.log(data);
      })
  }
  return (
    <div className='container'>
    <h3 className='text-center mb-4 cormorant-font'>ALL ORDERS</h3>
      <table className="table mulish-font w-100">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Email ID</th>
            <th scope="col">Service</th>
            <th scope="col">Price</th>
            <th scope="col">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr>
              <th scope="row">{order.name}</th>
              <td>{order.email}</td>
              <td>{order.serviceName}</td>
              <td>{order.servicePrice}</td>
              <td>
                <select onChange={(e)=>handleSelect(order._id,e)} name="status" defaultValue={order.status}>
                  <option  value="Pending">Pending</option>
                  <option  value="On going">On going</option>
                  <option  value="Done">Done</option>
                </select>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderList;
