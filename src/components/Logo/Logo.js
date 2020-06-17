import React from 'react';
// import gayathriMataLogo from '../../assets/images/app_logo.jpg';
import classes from './Logo.module.css';

const logo = (props) => (
    <div className={classes.Logo}>
        <p style={{fontWeight: 'bold'}}>Logo Placeholder</p>
        {/* <a href="/"><img src={gayathriMataLogo} className={props.logoStyling} alt="Logo of Agastya Peetam - Gayathri Mata" /></a> */}
    </div>
);

export default logo;