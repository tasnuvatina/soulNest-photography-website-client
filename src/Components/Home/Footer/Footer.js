import React from 'react';
import './Footer.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF ,faTwitter,faInstagram,faYoutube} from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import symbol from '../../../images/symbol.png'
const Footer = () => {
    return (
        <div className='footer-main pt-5'>
            <div className='row w-100 text-center mx-0'>
            <div className='col-md-4 my-2'>
                <h3 className='cormorant-font'>Follow Us</h3>
                <div className='my-3'><span><a href="" className='social-media-icons'><FontAwesomeIcon icon={faFacebookF} /></a></span>____<span><a href="" className='social-media-icons'><FontAwesomeIcon icon={faInstagram} /></a></span>____<span><a href="" className='social-media-icons'><FontAwesomeIcon icon={faTwitter} /></a></span>____<span><a href="" className='social-media-icons'><FontAwesomeIcon icon={faYoutube} /></a></span></div>
                <h5 className='cormorant-font'><em>abc@abc.com</em></h5>
            </div>
            <div className='col-md-4 my-2'>
                <img className='footer-symbol' src={symbol} alt=""/>
            </div>
            <div className='col-md-4 my-2'>
            <h3 className='cormorant-font'>Newsletter</h3>
            <p className='cormorant-font'><em>Follow our latest stories...</em></p>
            <div><input className='form-input mr-2' type="email" name="email" id="" placeholder='E-MAIL'/><button className="email-btn-style"><FontAwesomeIcon icon={faEnvelope} /></button></div>
            </div>
            <div className='my-3 text-center text-dark mx-auto cormorant-font'><small>© {(new Date()).getFullYear()} Copyright –All Rights Reserved</small></div>

            </div>
        </div>
    );
};

export default Footer;