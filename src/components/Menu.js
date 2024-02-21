import React,{useState} from "react";
import { Col, Container, Row } from "react-bootstrap";
import PizzaCard from "./PizzaCard";

const Menu = () => {
  const [menu] = useState([1]);
  return (
    <section id="menu" className="bg-light">
      <Container>
        <div className="text-center">
          <h3 className="text-primary my-3 py-5">
            Treat yourself with our Everyday Menu 
          </h3>
        </div>
        <Row>
          {menu.map((item) => {
            return (
              <Col md={6} lg={4} key={item}>
                <PizzaCard />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};


export default Menu;
