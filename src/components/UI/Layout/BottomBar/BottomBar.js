import React from 'react';
import classes from './BottomBar.module.css';
import ContactUs from '../ContactUs/ContactUs';
import commonClasses from '../../../../helpers/commonClasses.module.css';

const BottomBar = () => {
    return (
        <div className={classes.BottomBar}>

          <ContactUs addressShown={true} className={classes.BottomBarSubGrid1} />
          
          <div className={classes.BottomBarSubGrid2}>
            <div>
              <span className={commonClasses.Headings}>Other Links</span>

              <p>
                <a href="/our-privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                <br />
                <a href="/our-terms-and-conditions/" target="_blank" rel="noopener noreferrer">Terms and Conditions</a>
                <br />
                <a href="/our-refund-policy/" target="_blank" rel="noopener noreferrer">Refund Policy</a>
              </p>
            </div>

            <div className={classes.AboutDeveloper}>
              <span className={commonClasses.Headings}>Website Developer</span>
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
          </div>

          <div className={classes.CopyRight}>
            Copyright © 2020, &nbsp;&nbsp;Shri Agastya Peetam Trust of Narasimharao Palem,&nbsp;&nbsp;All Rights Reserved.
          </div>
          
        </div>
    );
};

export default BottomBar;