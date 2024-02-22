import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Image } from "react-bootstrap";

const Category = () => {
  return (
    <Container className="" style={{ marginTop: "150px" }}>
      <h6>Featured</h6>
      <Row>
        <Col sm={4}></Col>
        <Col sm={4}></Col>
        <Col sm={4}></Col>
      </Row>
    </Container>
  );
};
export default Category;
