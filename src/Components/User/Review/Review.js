import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";

const Review = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    //image upload
    const [imageURL, setImageURL] = useState(null);
    const handleImageUpload=(event)=>{
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
    }
    const onSubmit = data => {
        let newReview={...data,pic:imageURL}
        let url='https://limitless-peak-51272.herokuapp.com/addReview'
        fetch(url,{
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newReview),
          })
          .then(res=>{
              if(res){
                  alert('your review has been accepted')
              }
          })
    };
    return (
        <div className='container mulish-font'>
        <h3 className='text-center mb-4 cormorant-font'>GIVE A REVIEW</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
     
      <input name="brideName" className='form-control my-3'  ref={register} placeholder='Name of the Bride'/>
      <input name="groomName" className='form-control my-3'  ref={register} placeholder='Name of the Groom'/>
      <input name="description" className='form-control my-3'  ref={register} placeholder='Say a few words about our service...'/>
      <input type='file' className=' my-3' onChange={handleImageUpload}/>
      
     
      
      <div className='text-right'><input className='btn-style' type="submit" /></div>
    </form>
        </div>
    );
};

export default Review;