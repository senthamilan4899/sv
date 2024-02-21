import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Modal from 'react-bootstrap/Modal';

const PizzaCard = () => {
  const [modalShow, setModalShow] = React.useState(false);

  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Order Confirmation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        Added successfully
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  

  return (
    <>
      <Card>
        <Card.Img src={require("../assets/pizza-1.jpeg")} />
        <Card.Body>
          <Card.Title>Momo Mia Pizza-Veg</Card.Title>
          <Card.Text>
          Epic combination of signature pan crust, delicious paneer & veg momos topped with spicy Schezwan sauce, onion, capsicum, sweet corn & 100% mozzarella
          </Card.Text>
          <div className="text-center">
            <Button variant="primary" onClick={() => setModalShow(true)}>
              Add to Basket
            </Button>
          </div>
        </Card.Body>
      </Card>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
};

export default PizzaCard;
