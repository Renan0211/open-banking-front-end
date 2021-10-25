import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';

import image1 from '../images/open-banking.jpg';
import image2 from '../images/Data Protection Principles.jpg';
import image3 from '../images/OPEN-BANKING2.jpg'

const carouselItemStyle = {
  "max-height": '465px', 
}

class HomePageCarousel extends Component {
  render() {
    return (
      <Carousel variant="dark" className="m-3">
        <Carousel.Item style={carouselItemStyle}>
          <img
            className="d-block w-100"
            src={image3}
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <img
            className="d-block w-100"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={carouselItemStyle}>
          <img
            className="d-block w-100"
            src={image1}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
};

export default HomePageCarousel;