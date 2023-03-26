import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <section id="contact" className="py-5">
      <Container>
        <Row>
          <Col className="text-center mb-4">
            <h2>Contact Us</h2>
            <p className="lead">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              pharetra mattis quam, id congue ligula pretium sed.
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>
              <Form.Group controlId="formBasicName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>
              <Form.Group controlId="formBasicMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md={4}>
            <h3>Contact Information</h3>
            <p>
              <strong>Address:</strong> 123 Main St, Anytown, USA
            </p>
            <p>
              <strong>Phone:</strong> (555) 555-5555
            </p>
            <p>
              <strong>Email:</strong> info@surprizen.com
            </p>
          </Col>
          <Col md={8}>
            <h3>Connect with Us</h3>
            <p>Follow us on social media:</p>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-facebook fa-2x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-twitter fa-2x"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#">
                  <i className="fab fa-instagram fa-2x"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
