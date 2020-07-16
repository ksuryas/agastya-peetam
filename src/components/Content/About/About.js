import React, { Component } from 'react';
import classes from './About.module.css';
import ButtonCmp from '../../../helpers/ButtonCmp';
// import EventsAndGallery from '../EventsAndGallery/EventsAndGallery';

class About extends Component {
  componentWillUnmount() {
    let slokaHindi = document.getElementById('mantraHindi');
    slokaHindi.src = "";

    let slokaEnglish = document.getElementById('mantraEnglish');
    slokaEnglish.src = "";
  };
  
  pauseSlokas = () => {
    let slokaHindi = document.getElementById('mantraHindi');
    slokaHindi.src = "";

    let slokaEnglish = document.getElementById('mantraEnglish');
    slokaEnglish.src = "";
  };

  playSlokaHindi = () => {
    let playBtn = document.getElementById('playHindi');
    playBtn.className = "fa fa-pause-circle";
    playBtn.onClick = this.pauseSlokas;

    let sloka = document.getElementById('mantraHindi');
    sloka.src = "/audio/Gayathri Mantra.mp3";
    sloka.play();  
  };

  playSlokaEnglish = () => {
    let playBtn = document.getElementsById('playEnglish');
    playBtn.className = "fa fa-pause-circle";
    playBtn.onclick = this.pauseSlokas;

    let sloka = document.getElementById('mantraEnglish');
    sloka.src = "/audio/Gayathri Mantra.mp3";
    sloka.play();  
  };

  render() {
    let gmHindiSloka = ["ॐ भूर् भुवः स्वः |", "तत्सवितुर्वरेण्यं |", "भर्गो॑ देवस्य धीमहि ।", "धियो यो नः प्रचोदयात् ॥"];
    let gmEnglishSloka = ["Om Bhur Bhuvaḥ Swaḥ ", "Tat-savitur Vareñyaṃ ", "Bhargo Devasya Dheemahi", "Dhiyo Yonaḥ Prachodayāt"];  

    return (
            <div className={classes.About}>
                <img src="/images/Veda Gayathri Mata.jpg" alt="Gayathri Maa" title="Gayathri Mata" className={classes.GayathriMaa} />
                                
                 <p className={classes.Sloka}>
                 {gmHindiSloka.map(line => (
                   <span key={line}>
                   {line}
                   <br />
                   </span>
                 ))} <i className="fa fa-play-circle" id="playHindi" onClick={this.playSlokaHindi} />
                 </p>

                <div className={classes.Agastya}>
                  <a href="https://en.wikipedia.org/wiki/Agastya" target="_blank" rel="noopener noreferrer">
                  <img src="/images/Agastya.jpg" alt="Agastya Maha Muni" title="Agastya Maha Muni" />
                  </a>   
                </div>

                <p className={classes.Sloka}>
                 {gmEnglishSloka.map(line => (
                   <span key={line}>
                   {line}
                   <br />
                   </span>
                 ))} <i className="fa fa-play-circle" id="playEnglish" onClick={this.playSlokaEnglish} />
                 </p>

                <img src="/images/AboutUs Right.jpeg" alt="Swamiji" title="Shri Swami Sugunananda Gayathri" className={classes.Swamiji} />
            
                <p className={classes.AboutText}>
                    <b>The Divine Beginning</b>

                    <br />

                    Sree Agastya Peetam was founded on 22nd January 2018 on the auspicious day of Vasanta Panchami!

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
           
              <audio id="mantraHindi" src="">
               {/* changing source in JavaScript function and React.js componentWillUnmount function */}
              </audio>

              <audio id="mantraEnglish" src="">
               {/* changing source in JavaScript function and React.js componentWillUnmount function */}
              </audio>

              <div className={classes.DonateSection}>
              <p>Please support our mission by donating here!</p>
              <a href="https://rzp.io/l/s2lT7Z2" className={classes.DonateLink} target="_blank" rel="noopener noreferrer">
              <ButtonCmp type="button" className={classes.Donate}>Donate</ButtonCmp>
              </a>
              </div>

            {/* <EventsAndGallery /> */}
         </div>
    );
   }
};

export default About;