import React from 'react';
import ImageCarousel from './ImageCarousel/ImageCarousel';

const HomePage = () => {
      const allImages = [
        {
          path: '/images/gm1.jpg', 
          altText: 'Goddess Vaishnodevi!', 
          caption: 'Jai Mata Di!'
        }, {
          path: '/images/gm2.png', 
          altText: 'Powerful Goddess Vaishnodevi!', 
          caption: 'Jai Maa!'
        }
      ];

      return (
        <div>
            <h3>Learn more about Sri Sugunanda Gayathri Swamiji and his divinity!</h3>
            <ImageCarousel imgs={allImages} />
        </div>
  );
};

export default HomePage;