import React from 'react';
import classes from './BottomBar.module.css';
import ContactUs from '../../ContactUs/ContactUs';

const BottomBar = () => {
    return (
        <div>
        <div className={classes.BottomBar}>
          <div></div>
          <ContactUs />
        </div>

        <div className={classes.BottomPages}>
              <p>
                Developed by: <a 
                href="https://surya-kasibhatla-portfolio.web.app/"
                target="_blank"
                rel="noopener noreferrer">
                    Surya Kasibhatla
                </a>
              </p>
          </div>
        </div>
    );
};

export default BottomBar;