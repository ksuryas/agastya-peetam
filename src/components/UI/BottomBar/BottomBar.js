import React from 'react';
import classes from './BottomBar.module.css';
import ContactUs from '../../ContactUs/ContactUs';

const BottomBar = () => {
    return (
        <div className={classes.BottomBar}>
          <div>
              <p className={classes.Headings}>Other Links</p>
              
              <p>
                <a href>Terms and Conditions</a>
                <br />
                <a href>Privacy Policy</a>
                <br />
                <a href>Refund Policy</a>
              </p>
          </div>

          <ContactUs addressShown={true} className={classes.BottomBarSubGrid} />
          
          <div className={classes.BottomPages}>
            <p className={classes.Headings}>About the Developer</p>

            Name : Surya Kasibhatla
            <br />
            Age  : 12 years 
            <br />
            Profile : <a 
                href="https://surya-kasibhatla-portfolio.web.app/"
                target="_blank"
                rel="noopener noreferrer">
                    Click here
                </a>
          </div>

          <div className={classes.CopyRight}>
            Copyright © 2020, &nbsp;&nbsp;Shri Agastya Peetam Trust of Narasimharao Palem,&nbsp;&nbsp;All Rights Reserved.
          </div>
        </div>
    );
};

export default BottomBar;