import React, { Component } from 'react';
import './ImageCarousel.css';
import GM from '../../../assets/images/app_logo.jpg';
import AGM from '../../../assets/images/altlogo.png';

let slideIndex = 0;

const showSlides = () => {
  let i;
  let slides = document.getElementsByClassName("MySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = "block";  
  setTimeout(showSlides, 2500); // Change image every 2 seconds
};

class ImageCarousel extends Component {
    componentDidMount() {
        showSlides();
    };

    render() {
        return (
            <div className="CarouselContainer">
                <div className="MySlides Fade">
                    <div className="NumberText">1 / 2</div>
                    <img src={GM} alt="" className="Images" />
                    <br />
                    <br />
                    <div className="Caption">Jai Mata Di!</div>
                </div>

                <div className="MySlides Fade">
                    <div className="NumberText">2 / 2</div>
                    <img src={AGM} alt="" className="Images" />
                    <br />
                    <br />
                    <div className="Caption">Jai Mata Di!</div>
                </div>
             </div>
       );
    }
}

export default ImageCarousel;