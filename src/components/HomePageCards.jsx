import React, { Component } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

import cardImage from '../images/product-card.png'

class HomePageCards extends Component {
  render() {
    return (
      <div className="">
        <h1 className="text-dark my-5 mx-auto text-center bg-light p-5 rounded-3">Meet our products!</h1>
          <Row className="mx-auto">
            <Col className="mb-3">
              <Card style={{ width: '18rem' }} bg="light" className="mx-auto">
                <Card.Img variant="top" src={cardImage}/>
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ullamcorper volutpat. Aliquam molestie bibendum pretium. Integer tortor urna.
                  </Card.Text>
                  <Button variant="dark">Know more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-3">
            <Card style={{ width: '18rem' }} bg="light" className="mx-auto">
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ullamcorper volutpat. Aliquam molestie bibendum pretium. Integer tortor urna.
                  </Card.Text>
                  <Button variant="dark">Know more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-3">
            <Card style={{ width: '18rem' }} bg="light" className="mx-auto">
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ullamcorper volutpat. Aliquam molestie bibendum pretium. Integer tortor urna.
                  </Card.Text>
                  <Button variant="dark">Know more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className="mb-3">
              <Card style={{ width: '18rem' }} bg="light" className="mx-auto">
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ullamcorper volutpat. Aliquam molestie bibendum pretium. Integer tortor urna.
                  </Card.Text>
                  <Button variant="dark">Know more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-3">
              <Card style={{ width: '18rem' }} bg="light" className="mx-auto">
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ullamcorper volutpat. Aliquam molestie bibendum pretium. Integer tortor urna.
                  </Card.Text>
                  <Button variant="dark">Know more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-3">
             <Card style={{ width: '18rem' }} bg="light" className="mx-auto">
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ullamcorper volutpat. Aliquam molestie bibendum pretium. Integer tortor urna.
                  </Card.Text>
                  <Button variant="dark">Know more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row className="mx-auto">
            <Col className="mb-3">
            <Card style={{ width: '18rem' }} bg="light" className="mx-auto">
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ullamcorper volutpat. Aliquam molestie bibendum pretium. Integer tortor urna.
                  </Card.Text>
                  <Button variant="dark">Know more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-3">
             <Card style={{ width: '18rem' }} bg="light" className="mx-auto">
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ullamcorper volutpat. Aliquam molestie bibendum pretium. Integer tortor urna.
                  </Card.Text>
                  <Button variant="dark">Know more</Button>
                </Card.Body>
              </Card>
            </Col>
            <Col className="mb-3">
            <Card style={{ width: '18rem' }} bg="light" className="mx-auto">
                <Card.Img variant="top" src={cardImage} />
                <Card.Body>
                  <Card.Title>Product Name</Card.Title>
                  <Card.Text>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed varius ullamcorper volutpat. Aliquam molestie bibendum pretium. Integer tortor urna.
                  </Card.Text>
                  <Button variant="dark">Know more</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </div>
    );
  }
};

export default HomePageCards;