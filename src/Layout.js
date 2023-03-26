import React from 'react';
import { Container } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <Container>
      {children}
    </Container>
    <Footer />
  </>
);

export default Layout;
