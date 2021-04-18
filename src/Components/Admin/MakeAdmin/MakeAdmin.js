import React from "react";
import { useForm } from "react-hook-form";

const MakeAdmin = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>{
      let url ='https://limitless-peak-51272.herokuapp.com/addAdmin'
      fetch(url,{
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(result=>{
          if(result){
              alert("New admin added successfully!!!")
          }
      })
  };
  return (
    <div className="container mulish-font">
      <h3 className="text-center mb-4 cormorant-font">ADD NEW ADMIN</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input  className="form-control my-3"
          name="email"
          ref={register}
         placeholder='janedoe@gmail.com'/>

        <input type="submit" />
      </form>
    </div>
  );
};

export default MakeAdmin;
