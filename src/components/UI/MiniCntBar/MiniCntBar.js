import React from 'react';
import classes from './MiniCntBar.module.css';

const MiniCntBar = () => {
    return (
        <div className={classes.DesktopMiniCntBar}>
            <a href="/about-agastya-peetam/" className={classes.AboutButton}> 
            <button className={classes.AboutButton}>About Agastya Peetam</button>
            </a>

            <p>
            <i className="fa fa-envelope" /> <a 
            href="mailto:test@agp.org"
            className={classes.EmailTel} 
            target="_blank" 
            rel="noopener noreferrer">
            test@agp.org
            </a>
            </p>
            
            <p>
            <i className="fa fa-phone" /> <a 
            href="tel:+91 9789335500" 
            className={classes.EmailTel}>
            +91 9789335500
            </a> | <a 
            href="tel:+1 469-1146-6600" 
            className={classes.EmailTel}>
            +1 469-1146-6600
            </a>
           </p>
        </div>
    );
};

export default MiniCntBar;