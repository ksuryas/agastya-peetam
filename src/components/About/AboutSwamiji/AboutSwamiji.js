import React from 'react';
import classes from './AboutSwamiji.module.css';
import BooksBySwamiji from '../../BooksBySwamiji/BooksBySwamiji';

const AboutSwamiji = () => {
        return (
          <div>           
            <div className={classes.TextContainer}>
            <div className={classes.AboutSwamiji}>
            <div className={classes.SwamijiArticle}>
              <img src="/images/Meditation.jpeg" alt="Meditation" className={classes.Image} />
              <span>&nbsp;&nbsp;</span>
        Swamy Sugunanda Gayathri is a Sidha Yogi. He went to Himalayas at the age of 13 at the behest  
         of a Yogi. On 28-07-1999, on the divine occasion of Guru Purnima, in the early hours of the day 
          a Yogi came to him in his dream and told him "Your time has come. Come now". He also blessed him by 
         giving Upadesha of Gayathri Mantra. In that same month Swamy Sugunanda Gayathri left for the Himalayas. 
         He was only 13 years old at that time. He went to more than 16 different ashrams in search of the yogi of 
         his dreams and in search of the aim of his life.
            </div>

            <div className={classes.SwamijiArticle}>
            In his years long search for his life's aim Swamy Sugunanda Gayathri went to Rishikesh, 
            Haridwar, Kedarnath, Gangothri and many other divine places and continued his meditation and 
            Sadhana by doing 5000 to 8000 Gayatri Mantra Jaap everyday. 
            He was given support and direction by Swami Dhirendra Baba. One day on the banks of Ganges in 
            Rishikesh, the same yogi who came into his dreams and beckoned him to go to Himalayas, appeared 
            and told Swamy Sugunanda Gayathri that he is born for a special cause and he would be taking up 
            Rajayoga by marrying and becoming father of three children. 
            The Yogi also told him that he will get a spiritual guru soon for carrying out his Sadhana. Then 
            over the next six days Swamy Sugunanda Gayathri went to Kedarnath and met Mata Renuka Devi at 
            Brahma Guha. Mata Renuka took him as a disciple and taught him yoga vidhi. Swamyji then went to 
            Uttara Kasi and carried out deep meditation at Pandava Guha and in guhas in Gangothri. 
            During this period he would do Bhikshatan (beg for alms) everyday and eat only one roti per day. 
            Between 2008 and 2011, Swamyji spent time in Telangana, Rayalaseema and Visakhapatnam and continued his 
            Sadhana.
            
            <span>&nbsp;&nbsp;</span>

             <img src="/images/Sanyasa Deeksha.jpeg" alt="Sanyasa Deeksha" className={classes.Image} />
            </div>

            <div className={classes.SwamijiArticle}>
              <img src="/images/New Himalayas.jpg" alt="Himalayas" className={classes.Image} />
              <span>&nbsp;&nbsp;</span>
            Then, he went back to Himalayas and met Mata Renuka Devi in Gangothri.  
            He sought Mata Renuka Devi's help in understanding his Guruji's order for him to conduct Gayathri 
            Maha Purascharana after 7 years of marital life. Swamy Sugunanda was not convinced to live amongst 
            people and wanted to continue his spiritual quest in the Himalayas. Mata Renuka Devi told him 
            that to protect the Rishi Sampradaya and bring peace to people and nature, he must do as his 
            Guruji told him and make sure the Gayatri Maha Purascharana continues in every generation after 
            him also. She blessed him for Akhanda Gayathri Maha Purascharana for 5000 years. On January 22nd, 2018,
             Swamy Sugunanda Gayathri started 24 years long Gayathri Maha Purascharana. 
            </div>
            </div>

            <BooksBySwamiji className={classes.BooksBySwamiji} imgClassName={classes.BookCover} />
            
            </div>
          </div>
    );
};

export default AboutSwamiji;