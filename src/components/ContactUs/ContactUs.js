import React from 'react';
import classes from './ContactUs.module.css';

const ContactUs = (props) => {
    let addressClass = classes.AddressBlock;

    if(!props.addressShown) {
        addressClass = classes.AddressNone;
    }

    return (
        <div className={props.className}>
        <h6 className={addressClass}>Contact Us</h6>
          <p className={addressClass}>
            <i className="fa fa-map-marker" /> Shri Agastya Peetam, 
             <br />
            Narasimharao Palem village, 
            <br />
            Veerullapadu Mandal, 
            <br />
            Krishna District, 
            <br />
            Andhra Pradesh, 521181,
            <br /> 
            India
        </p>

            <p>
            <i className="fa fa-envelope" /> <a 
            href="mailto:agastyapeetam.info@gmail.com"
            className={classes.EmailTel} 
            target="_blank" 
            rel="noopener noreferrer">
            agastyapeetam.info@gmail.com
            </a>
            </p>
            
            <p className={classes.CommunicationIcons}>
                <i className="fa fa-phone fa-lg" /> <a 
                href="tel:+916303895610" 
                className={classes.EmailTel}>
                  +91 6303895610
                </a> | <a 
                href="tel:+1 4026135700" 
                className={classes.EmailTel}>
                    +1 402-613-5700
                </a>
            </p>
            
           <p className={classes.SocialMediaIcons}>
                <a 
                href="https://www.facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={classes.SocialMedia}>
                    <i className="fa fa-facebook-official fa-lg" />
                </a>

            <span>&nbsp; &nbsp;</span>
                <a 
                href="https://www.twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={classes.SocialMedia}>
                    <i className="fa fa-twitter fa-lg" />
                </a>          

                
            <span>&nbsp; &nbsp;</span>
                <a 
                href="https://www.youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className={classes.SocialMedia}>
                    <i className="fa fa-youtube fa-lg" />
                </a>                
            </p>
        </div>
    );
};

export default ContactUs;