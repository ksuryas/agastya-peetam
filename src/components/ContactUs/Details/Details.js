import React from 'react';
import classes from './Details.module.css';

const Details = () => {
    return (
        <section>
          <p>
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
            href="mailto:support@agp.org"
            className={classes.EmailTel} 
            target="_blank" 
            rel="noopener noreferrer">
            support@agp.org
            </a>
            </p>
            
             <p className={classes.CommunicationIcons}>
                <i className="fa fa-phone fa-lg" /> <a 
                href="tel:+919789335500" 
                className={classes.EmailTel}>
                    +91 9789335500
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
        </section>
    );
};

export default Details;