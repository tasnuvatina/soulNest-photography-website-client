import React, { useEffect, useRef, useState } from "react";
//font awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import './ManageService.css'
const ManageService = () => {
    const nameRef = useRef();
    const priceRef = useRef();
    const descriptionRef= useRef();
  let [services, setServices] = useState([]);
  let [serviceToUpdate,setServiceToUpdate]=useState({})
  useEffect(() => {
    let url = "https://limitless-peak-51272.herokuapp.com/services";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, [services]);
  const handleLoad=(id)=>{
      let url=`https://limitless-peak-51272.herokuapp.com/singleService/${id}`
      fetch(url)
      .then((res)=>res.json())
      .then(data=>setServiceToUpdate(data))
  }
  const handleDelete=(id)=>{
    let url=`https://limitless-peak-51272.herokuapp.com/deleteService/${id}`
    fetch(url,{
        method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
    })
}

const handleUpdate = (id) => {
  let name = nameRef.current.value;
  let price = priceRef.current.value;
  let description = descriptionRef.current.value;
  let updatedService = { id, name, price, description };
  let url = `https://limitless-peak-51272.herokuapp.com/updateService/${id}`;
  fetch(url, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(updatedService),
  })
  .then(res=>res.json())
  .then(data=>{
      console.log(data);
      setServiceToUpdate({});
  })
};
  return (
    <div className='container'>
    <h3 className='text-center mb-4 cormorant-font'>MANAGE SERVICES</h3>
      <table class="table mulish-font">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">price</th>
            <th scope="col">Update</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
        {services.map((service, index) => {
        return (
          <tr>
            <th scope="row">{index+1}</th>
            <td>{service.name}</td>
            <td><span>$</span> <span> {service.price}</span></td>
            <td><button onClick={()=>handleLoad(service._id)} className='update-btn'><FontAwesomeIcon icon={faPencilAlt} /></button></td>
            <td><button onClick={()=>handleDelete(service._id)} className='delete-btn'><FontAwesomeIcon icon={faTrashAlt} /></button></td>
          </tr>
        );
      })}
        </tbody>
      </table>
      

      
         {
             serviceToUpdate._id &&  <div>
            <div className='mulish-font '>
              <h4>
                <strong>Service Id :</strong>{serviceToUpdate._id}
              </h4>
            </div>
            <div>
              <label htmlFor="name">Service Name : </label>
              <input
                type="text"
                defaultValue={serviceToUpdate.name}
                name="name"
                className="form-control"
                ref={nameRef}
              />
              <label htmlFor="price">Service Price : </label>
              <input
                type="text"
                defaultValue={serviceToUpdate.price}
                name="price"
                className="form-control"
                ref={priceRef}
              />
              <label htmlFor="brand">Service Description : </label>
              <input
                type="text"
                defaultValue={serviceToUpdate.description}
                name="brand"
                className="form-control"
                ref={descriptionRef}
              />
              <button
                className="btn-style mt-3 mb-5"
                onClick={() => handleUpdate(serviceToUpdate._id)}
              >
                Update
              </button>
              <button
                className="btn-style ml-5 mt-3 mb-5"
                onClick={() =>setServiceToUpdate({})}
              >
                Cancel
              </button>
            </div>
          </div>
         }
    </div>
  );
};

export default ManageService;
