import React from 'react';
import classes from './Logo.module.css';

const logo = () => (
    <div className={classes.Logo}>
       <a href="/">
        <img 
        src="/images/omlogo.jpg" 
        alt="Logo of Shri Agastya Peetam - Gayathri Mata" />
       </a> 
    </div>
);

export default logo;