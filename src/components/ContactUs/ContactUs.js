import React from 'react';
import Details from './Details/Details';
import classes from './ContactUs.module.css';

const ContactUs = () => {
    return (
        <div className={classes.ContactUs}>
            <h6>Contact Us</h6>
            <Details />
        </div>
    );
};

export default ContactUs;