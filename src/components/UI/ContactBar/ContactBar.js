import React from 'react';
import classes from './ContactBar.module.css';
import ContactUs from '../../ContactUs/ContactUs';

const ContactBar = () => {
    return (
        <div className={classes.DesktopContactBar}>
             <p>

             </p>
                         
            <ContactUs addressShown={false} className={classes.DesktopSubGrid} emailTelClassName={classes.EmailTel} />
        </div>
    );
};

export default ContactBar;