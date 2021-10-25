import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import HomePageCards from '../components/HomePageCards';
import HomePageCarousel from '../components/HomePageCarousel';

class HomePage extends Component {
  render() {
    return (
      <Container>
        <HomePageCarousel/>
        <HomePageCards/>
      </Container>
    );
  }
};

export default HomePage;