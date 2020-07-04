import React from 'react';
import classes from './BottomBar.module.css';
import ContactUs from '../../ContactUs/ContactUs';

const BottomBar = () => {
    return (
        <div className={classes.BottomBar}>
          

          <ContactUs addressShown={true} className={classes.BottomBarSubGrid} />
          <div>
              <span className={classes.Headings}>Other Links</span>
              <br />
              <p>
                <a href>Terms and Conditions</a>
                <br />
                <a href>Privacy Policy</a>
                <br />
                <a href>Refund Policy</a>
              </p>
          </div>
          <div className={classes.BottomPages}>
            <span className={classes.Headings}>Website Developer</span>
            <br />
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