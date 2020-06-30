import React from 'react';
import classes from './DonationSuccessful.module.css';

const DonationSuccessful = () => {
    return (
        <div className="alert alert-success">
           <h3>Donation is Successful!</h3> 
           <p className={classes.DonationValuedText}>Your donation is greatly appreciated and valued!</p>   
        </div>
    );
};

export default DonationSuccessful;