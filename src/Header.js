import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css';
import logo from './assets/logo.png';


const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className='px-3'>
        <Container className='container-fluid logo-container'>
            <Navbar.Brand href="#home">
            <img 
                src={logo}
                alt="Surprizen Logo"
                className="d-inline-block align-top"
                style={{ height: "50px", width: "auto" }}
            img />
        
            </Navbar.Brand>
      </Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#about">About</Nav.Link>
                <Nav.Link href="#pricing">Pricing</Nav.Link>          
                <Nav.Link href="#contact">Contact</Nav.Link>
                <Nav.Link href="#privacy">Privacy</Nav.Link>
            </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
