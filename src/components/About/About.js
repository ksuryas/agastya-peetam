import React from 'react';
import classes from './About.module.css';
import EventsAndGallery from '../EventsAndGallery/EventsAndGallery';

const About = () => {
    return (
          <div>
            <div className={classes.About}>
                <img src="/images/Veda Gayathri Mata.jpg" alt="Gayathri Maa" className={classes.GayathriMaa} />
                
                <p className={classes.AboutText}>
                <img src="/images/Agastya 1.jpg" alt="Agastya Maha Muni" className={classes.Agastya} />
                   
                   <br />

                    <b>Sacred Beginning</b>

                    <br />

                    Shri Agastya Peetam was founded on 22nd January 2018 on the auspicious day of Vasanta Panchami!

                    <br />
                    <br />
                    
                    <b>Mission</b>

                    <br />

                    Our mission is to bring Loka Shanthi and Kalyanam (world peace and prosperity)
                    by doing Gayathri Maha Purashcharana and Deergha Sathra Yagam. Gayathri Maha Purascharana
                    is a 24 year long ritual done under strict vedic rules by a Sadhaka following strict
                    <i> Brahmacharya</i> with a wish for bringing good to world. Deergha Sathra Yagam is a 12
                    year long ritual. Each of these rituals require complete dedication and devotion.  
                    Learn about these sacred rituals in detail by clicking the respective tabs above! 
                    Please donate generously to Shri Agastya Peetam to help us fulfill our mission!
                </p>

                <img src="/images/AboutUs Right.jpeg" alt="Swamyji" className={classes.Swamiji} />
            </div>
            
            <EventsAndGallery />
         </div>
    );
};

export default About;