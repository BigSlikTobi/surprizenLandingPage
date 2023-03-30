import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from './assets/logo.png';
import './Hero.css'; 

const Hero = () => {
  return (
    <section class="hero-section"> 
    <div className="hero-section">

    

      <Container className='hero-text-container'>
      <h1 className="hero-text-header">
      Personalized Surprises for Every Occasion
    </h1>
        <Row>
        <Col lg={6} className="d-flex align-items-left justify-content-center flex-column">
          <section class="hero-text-container" >
          
            <ul className="text-black mb-5" style={{ listStyle: 'none', paddingLeft: 0, }}>
              <li className="mb-3">
                <span className="bullet-point mr-3">&#8226;</span>
                Personalized surprises based on interests
              </li>
              <li className="mb-3">
                <span className="bullet-point mr-3">&#8226;</span>
                Unforgettable experiences for any occasion
              </li>
              <li className="mb-3">
                <span className="bullet-point mr-3">&#8226;</span>
                Express love and gratitude in a unique way
              </li>
            </ul>
        </section>

          </Col>
         
          <Col lg={6} className="d-flex align-items-center justify-content-center flex-column">
          <Button variant="outline-primary" style={{ padding: '20px 40px', fontSize: '24px' }} className="custom-button">Start your journey</Button>
            {/*<img src={logo} alt="Surprizen Logo" style={{ height: '250px', marginBottom: '50px' }} />
            <Button variant="light" class="btn btn-primary btn-lg" href="#pricing" style={{ marginBottom: '25px'}}>Let's Start</Button>*/}
          </Col>
          
         
        </Row>
      </Container>
    </div>
    </section>
  );
};

export default Hero;

 