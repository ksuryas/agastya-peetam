import React from 'react';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
       <a href="/">
        <img 
        src="/images/logo1.jpg" 
        alt="Logo of Shri Agastya Peetam" />
       </a> 
    </div>
);

export default logo;