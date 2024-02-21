import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-bootstrap/Carousel";

const Banner = () => {
  return (
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col lg={8}>
          <Carousel>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/one.jpeg")}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>Margherita</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/two.jpeg")}
                alt="Second slide"
              />

              <Carousel.Caption>
                <h3>Cheese Pizza</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={2000}>
              <img
                className="d-block w-100"
                src={require("../assets/three.jpeg")}
                alt="Third slide"
              />

              <Carousel.Caption>
                <h3>Pepporoni</h3>
                
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <div className="text-center">
        <h2 className="display-5 mt-3">Pizzas for Every Occasion!</h2>
       
      </div>
    </Container>
  );
};

export default Banner;
