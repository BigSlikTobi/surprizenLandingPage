import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from './assets/logo.png';
import './Hero.css'; 

const Hero = () => {
  return (
    <section class="hero-section"> 
    <div className="hero-section" style={{ backgroundColor: '#9d70b5', paddingTop: '80px' }}>
      <Container>
        <Row>
          <Col lg={6} className="d-flex align-items-center justify-content-center flex-column">
            <img src={logo} alt="Surprizen Logo" style={{ height: '250px', marginBottom: '50px' }} />
            <Button variant="light" class="btn btn-primary btn-lg" href="#pricing" style={{ marginBottom: '25px'}}>Let's Start</Button>
          </Col>
          
          <Col lg={6} className="d-flex align-items-center justify-content-center flex-column">
          <section class="hero-text-container">
            <h1 className="text-white mb-4">Personalized Surprises for Every Occasion</h1>
            <p className="text-white mb-5">At Surprizen, we believe that every surprise should be unique and memorable. We aim to revolutionize the way people give gifts by offering personalized surprises based on the recipient's personality, interests, and preferences. Our goal is to create unforgettable experiences that bring joy and happiness to both the giver and the receiver. With our innovative approach, we strive to make every occasion special and meaningful, whether it's a birthday, anniversary, or just a simple gesture of appreciation. Surprizen is more than just a gifting platform; it's a way to express love and gratitude in a way that truly resonates with the person you care about.</p>
            </section>
          </Col>
         
        </Row>
      </Container>
    </div>
    </section>
  );
};

export default Hero;

 