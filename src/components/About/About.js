import React from 'react';
import classes from './About.module.css';
// import EventsAndGallery from '../EventsAndGallery/EventsAndGallery';

const About = () => {
    return (
          <div>
            <div className={classes.About}>
                <img src="/images/Veda Gayathri Mata.jpg" alt="Gayathri Maa" title="Gayathri Mata" className={classes.GayathriMaa} />
                
                <p className={classes.AboutText}>
                <a href="https://en.wikipedia.org/wiki/Agastya" target="_blank" rel="noopener noreferrer" >
                  <img src="/images/Agastya.jpg" alt="Agastya Maha Muni" title="Agastya Maha Muni" className={classes.Agastya} />
                </a>   
                   
                    <b>The Divine Beginning</b>

                    <br />

                    Shri Agastya Peetam was founded on 22nd January 2018 on the auspicious day of Vasanta Panchami!

                    <br />
                    <br /> 
                                        
                    <b>Our Mission</b>

                    <br />
                    
                    Our mission is to bring Loka Shanthi and Kalyanam (universal peace and prosperity)
                    by doing Gayathri Maha Purashcharana and Deergha Sathra Yagam. 
                    <br />
                    <br />                    
                    <b>The Sacred Rituals</b>
                    <br />
                    Gayathri Maha Purascharana is a 24 year long ritual done under strict vedic rules by a Sadhaka following strict
                    <i> Brahmacharya</i>. Deergha Sathra Yagam is a 12 year long ritual.
                    Each of these rituals require complete dedication and devotion.                             
                    Learn about these sacred rituals in detail by clicking the respective tabs above! 
                   
                </p>

                <img src="/images/AboutUs Right.jpeg" alt="Swamiji" title="Shri Swami Sugunananda Gayathri" className={classes.Swamiji} />
            </div>
            
            {/* <EventsAndGallery /> */}
         </div>
    );
};

export default About;