import React from 'react';
import { photos } from "./photos";



  

const Photoes = () => {
    return (
        <div className='mt-5 pt-3 mb-5 pb-3 container'>
            <h2 className='text-center text-dark my-5 cormorant-font'>AUTHENTIC PHOTOS</h2>
            <div className='row w-100 mx-0'>
            {
                photos.map(photo=><div className='col-md-6 py-2'><img className='w-100' src={photo.src} alt=""/></div>)
            }
            </div>
        </div>
    );
};

export default Photoes;