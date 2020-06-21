import React, { Component } from 'react';
import './ImageCarousel.css';

let slideIndex = 0;
let timer;

const showSlides = () => {
  let i;
  let slides = document.getElementsByClassName("MySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex - 1].style.display = "block"; 

   timer = setTimeout(showSlides, 2500);

};

class ImageCarousel extends Component {
    componentDidMount() {
        showSlides();       
    };

    componentWillUnmount() {
      clearTimeout(timer);
    };
    
    render() {
        return (
            <div className="CarouselContainer">
            {this.props.imgs.map((img, index) => (
                    <div className="MySlides Fade" key={index}>
                    <img src={img.path} alt={img.altText} className="Images" />
                    <br />
                    <br />
                    <div className="Caption">{img.caption}</div>
                   </div>
                ))}        
             </div> 
       );
    }
}

export default ImageCarousel;