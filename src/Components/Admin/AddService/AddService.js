import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const AddService = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [imageURL, setImageURL] = useState(null);
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "c3a5e1749f745e232df102bb1899914d");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const onSubmit = (data) => {
    let serviceData = {
      name: data.name,
      price: data.price,
      description: data.description,
      imageURL: imageURL,
    };
    const url = "https://limitless-peak-51272.herokuapp.com/addService";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(serviceData),
    }).then((res) => {
      if (res) {
        alert("New Service has been created successfully!!!");
      }
    });
  };
  return (
    <div className="container mulish-font">
    <h3 className='text-center mb-4 cormorant-font'>ADD NEW SERVICE</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          className="form-control my-3"
          name="name"
          ref={register}
          placeholder="Service Title"
        />
        <input
          className="form-control my-3"
          name="price"
          ref={register}
          placeholder="Service Price"
        />
        <input
          className="form-control my-3"
          name="description"
          ref={register}
          placeholder="Service Description"
        />
        <input type="file" onChange={handleImageUpload} />

        <div className='text-right'><input className='btn-style' type="submit" /></div>
      </form>
    </div>
  );
};

export default AddService;
