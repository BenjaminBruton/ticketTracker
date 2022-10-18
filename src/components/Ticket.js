import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import "bootstrap/dist/css/bootstrap.min.css";

const Ticket = (props) => {
  const employeeCards = props.teamData.map((employees, index) => (
    <div key={index}>
      <Col>
        <Card style={{ width: "20rem" }}>
          <Card.Body>
            <Card.Title>{employees.name}</Card.Title>
            <Card.Text>{employees.role}</Card.Text>
            <Button variant="primary">Hired </Button>
            <Button variant="secondary">Offered </Button>
            <Button variant="secondary">Declined </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  ));

  return (
    <div>
      <Container>
        <Row xs={1} md={3}>
          {employeeCards}
        </Row>
      </Container>
    </div>
  );
};

export default Ticket;
