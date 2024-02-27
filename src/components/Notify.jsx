import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
const Notify = () => {
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
            <Col className="text-center">
              {" "}
              <Image
                src="./images/Lightgrey.png"
                alt="logo"
                className="img-fluid"
              />
              <p>Lightgrey</p>
            </Col>
            <Col className="text-center">
              <Image src="./images/Ligt.png" alt="logo" className="img-fluid" />
              <p>Light</p>
            </Col>
            <Col className="text-center">
              <Image src="./images/dark.png" alt="logo" className="img-fluid" />
              <p>Grey</p>
            </Col>
          </Row>

          <div className="mt-4">
            <Button
              type="btn"
              className="text-center btn-primary border rounded-2"
            >
              Save
            </Button>
            <Button type="btn" className="text-center btn-light mx-4">
              Cancel
            </Button>
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};
export default Notify;
