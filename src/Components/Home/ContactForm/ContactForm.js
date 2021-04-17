import React from 'react';
import './Contact-form.css'

const ContactForm = () => {
    return (
        <div className='contact-main'>
            <h2 className='text-dark text-center cormorant-font'>GET IN TOUCH</h2>
            <div className='form-div container p-5'>
                    <div className='row'>
                        <input className='col-md-5 my-3 mx-3 form-input' type="text" name="Name" id="" placeholder='NAME'/>
                        <input className='col-md-5 my-3 mx-3 form-input' type="email" name="email" id="" placeholder='EMAIL'/>
                        <input className='col-md-5 my-3 mx-3 form-input' type="text" name="wedding-date" id="" placeholder='WEDDING DATE'/>
                        <input className='col-md-5 my-3 mx-3 form-input' type="text" name="wedding-address" id="" placeholder='WEDDING ADDRESS'/>
                        <input className='col-md-5 my-3 mx-3 form-input' type="text" name="more" id="" placeholder='TELL US MORE'/>
                    </div>
                    <div className='text-center mt-5 mb-3 '><button className="px-5 btn-style">SEND</button></div>
            </div>
            
        </div>
    );
};

export default ContactForm;