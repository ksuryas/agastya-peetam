import React from 'react';
import classes from './ContactUs.module.css';

const ContactUs = (props) => {
    let addressClass = classes.AddressBlock;

    if(!props.addressShown) {
        addressClass = classes.AddressNone;
    }

    return (
        <div className={props.className}>
        <div className={addressClass}>
        <span className={classes.Headings}>Contact Us</span>
        <br />
          
            <i className="fa fa-map-marker" /> Shri Agastya Peetam Trust (Regd. No 147/2019)
             <br />
            Narasimharao Palem village
            <br />
            Veerullapadu Mandal
            <br />
            Krishna District
            <br />
            Andhra Pradesh - 521181, India
        
        </div>

        <div className={props.emailTelClassName}>
        <span className={[classes.Headings, addressClass].join(' ')}>Email/Call</span>
          <span>
            <i className="fa fa-envelope" /> <a 
            href="mailto:agastyapeetam.info@gmail.com"
            className={classes.Email} 
            target="_blank" 
            rel="noopener noreferrer">
            agastyapeetam.info@gmail.com
            </a>
            </span>
            
            <p className={classes.CommunicationIcons}>
                <i className="fa fa-phone fa-lg" /> India: <a 
                href="tel:+916303895610" 
                className={classes.EmailTel}>
                  +91 6303895610
                </a> | 
                <a 
                href="tel:+916281872869" 
                className={classes.EmailTel}>
                    +91 6281872869
                </a>
                    <br />
                    
                <i className="fa fa-phone fa-lg" /> USA: <a 
                href="tel:+14026135700" 
                className={classes.EmailTel}>
                    +1 402-613-5700
                </a>
            </p>
            </div>
           <p className={classes.SocialMediaIcons}>
           <span className={[classes.Headings, addressClass].join(' ')}>Social Media</span>
             
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