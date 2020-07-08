import React from 'react';
import classes from './TermsAndConditions.module.css';

const TermsAndConditions = () => {
    return (
        <div className={classes.TermsAndConditions}>
            <h4 className={classes.TermsAndConditionsHeading}>TERMS OF SERVICE</h4>

            <div className={classes.TermsAndConditionsContent}>
                <span>OVERVIEW</span>

                <p>
                This website is operated by Shri Agastya Peetam Trust. Throughout the site, the terms “we”, “us” and “our” refer to Shri Agastya Peetam Trust. Shri Agastya Peetam Trust offers this website, including all information, tools and services available from this site to you, the user, conditioned upon your acceptance of all terms, conditions, policies and notices stated here.
                </p>
            </div>
        </div>
    );
};

export default TermsAndConditions;