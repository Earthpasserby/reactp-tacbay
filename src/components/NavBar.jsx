import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  Button,
  FormControl,
  Form,
  InputGroup,
} from "react-bootstrap";

const NavBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">Navbar</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#">
              <Form className="d-flex" style={{ width: "100px" }}>
                <InputGroup style={{ width: "1400px" }}>
                  <Form.Control placeholder="Username">
                    <option>Select...</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                  </Form.Control>
                </InputGroup>
              </Form>
            </Nav.Link>
          </Nav>
          <InputGroup style={{ width: "400px" }}>
            <FormControl placeholder="Username" />
            <Button variant="primary">Search</Button>
          </InputGroup>
          <div className="d-flex">
            <Button variant="light" className="me-2">
              Login
            </Button>
            <Button variant="dark">Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
export default NavBar;
