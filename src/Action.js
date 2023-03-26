import React from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';



const Action = () => {
  return (
    <section className="action-section">
      <Container>
        <h2>Choose your surprise</h2>
        <Row>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/200/300" />
              <Card.Body>
                <Card.Title>A gesture for $50</Card.Title>
                <Card.Text>
                  This category is ideal for small and simple surprises, such as a thoughtful note, a small bouquet of flowers, or a personalized card. We can offer a set of 10 different options for this category.
                </Card.Text>
                <Button variant="primary">Select</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Lorem Ypsum</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="DALL·E 2023-03-26 21.04.07.png" />
              <Card.Body>
                <Card.Title>Birthday/Anniversary for $100</Card.Title>
                <Card.Text>
                  This category is for more significant events such as birthdays and anniversaries. We can offer a set of 20 different options for this category.
                </Card.Text>
                <Button variant="primary">Select</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Lorem Ypsum</small>
              </Card.Footer>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src="https://picsum.photos/200/300" />
              <Card.Body>
                <Card.Title>Something special for $250</Card.Title>
                <Card.Text>
                  This category is for once-in-a-lifetime surprises, such as a weekend getaway or a unique experience. We can offer a set of 30 different options for this category.
                </Card.Text>
                <Button variant="primary">Select</Button>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Lorem Ypsum</small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Action;
