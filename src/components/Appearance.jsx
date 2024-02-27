import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";

const Appearance = () => {
  return (
    <Container className="mt-5">
      <h4>Settings</h4>
      <p>Manage your team members and their account permissions here.</p>
      <Row className="mt-4 p-4">
        <Col sm={6} md={4}>
          <a href="/">
            <p> Personal info</p>
          </a>
          <a href="/">
            <p> Change Password</p>
          </a>
          <a href="/">
            <p>Notifications</p>
          </a>
          <a href="/">
            <p> Appearance</p>
          </a>
          <a href="/">
            <p>App Language</p>
          </a>
          <a href="/">
            <p>Delete Account</p>
          </a>
        </Col>
        <Col sm={6} md={8}>
          <h6>Appearance</h6>
          <hr />
          <Row>
            <Col></Col>
            <Col></Col>
            <Col></Col>
          </Row>

          <hr />
        </Col>
      </Row>
    </Container>
  );
};
export default Appearance;
