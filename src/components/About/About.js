import React from 'react';
import classes from './About.module.css';

const About = () => {
    return (
          <div>
            <div className={classes.About}>
                <img src="/images/gm1.jpg" alt="Gayathri Maa" className={classes.GayathriMaa} />

                <p className={classes.AboutText}>
                    Shri Agastya Peetam was founded on mm/dd/yy!

                    <b>Our mission</b>
                    <br />

    
                    Our mission is to bring Loka Shanthi and Kalyanam (world peace and prosperity)
                    by doing Gayathri Maha Purashcharana and Deergha Sathra Yagam. Learn about them
                    in detail by clicking their respective tabs above! Please donate above to
                    Shri Agastya Peetam to help us fulfill our mission!
                </p>

                <img src="/images/Swamyji.jpg" alt="Replace with Ashram" className={classes.Ashram} />
            </div>
            
            <div className={classes.Filler}>
              Placeholder for Events and Gallery!
          </div>
      </div>
    );
};

export default About;