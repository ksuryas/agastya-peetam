import React from 'react';
import classes from './ContactBar.module.css';

const ContactBar = () => {
    return (
        <div className={classes.DesktopContactBar}>
             <p>

             </p>
             
              <p className={classes.CommunicationIcons}>
                <i className="fa fa-envelope fa-lg" /> <a
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
        </div>
    );
};

export default ContactBar;