import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Image,
  Navbar,
  Nav,
  InputGroup,
  FormControl,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { BsBrightnessHigh } from "react-icons/bs";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const containerRef = useRef(null);

  const scrollToNext = () => {
    containerRef.current.scrollLeft += containerRef.current.offsetWidth;
  };

  const scrollToPrevious = () => {
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
  };

  return (
    <>
      <Container className="justify-content-center">
        <Navbar expand="lg">
          <Image src="./images/tacbay.png" alt="logo" className="img-fluid" />
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#features">
                <InputGroup>
                  <InputGroup.Text>
                    <IoLocationOutline />
                  </InputGroup.Text>
                  <Form.Select
                    value={selectedOption}
                    onChange={handleChange}
                    style={{
                      width: "300px",
                      backgroundColor: "#f0f0f0",
                      color: "#333",
                    }}
                  >
                    <h6>Recent Location</h6>
                    <option value="">Location</option>
                    <option value="1">Abuja </option>
                    <option value="2">Ikeja</option>
                    <option value="3">Ogun</option>
                    <option value="4">Gariki</option>
                    <option value="5">Lagos</option>
                  </Form.Select>
                </InputGroup>
              </Nav.Link>
              <Nav.Link href="#features">
                <InputGroup>
                  <InputGroup.Text>
                    <IoLocationOutline />
                  </InputGroup.Text>
                  <Form.Select
                    value={selectedOption}
                    onChange={handleChange}
                    style={{
                      width: "300px",
                      backgroundColor: "#f0f0f0",
                      color: "#333",
                    }}
                  >
                    <h6>Recent Location</h6>
                    <option value="">Location</option>
                    <option value="1">Abuja </option>
                    <option value="2">Ikeja</option>
                    <option value="3">Ogun</option>
                    <option value="4">Gariki</option>
                    <option value="5">Lagos</option>
                  </Form.Select>
                </InputGroup>
              </Nav.Link>
            </Nav>
            <Nav.Link className="toogle-icon mb-2">
              <BsBrightnessHigh />
            </Nav.Link>
            <Nav className="m-3">
              <Button variant="outline-success" className="">
                Login
              </Button>
            </Nav>
            <Nav className="">
              <Button className="">Sign Up</Button>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
      <Container fluid>
        <Row>
          <Col>
            <Button onClick={scrollToPrevious}>Previous</Button>
          </Col>
          <Col
            xs={10}
            ref={containerRef}
            style={{ overflowX: "auto", whiteSpace: "nowrap" }}
          >
            <Link to="section1" spy={true} smooth={true} duration={500}>
              Section 1
            </Link>
            <Link to="section2" spy={true} smooth={true} duration={500}>
              Section 2
            </Link>
            <Link to="section3" spy={true} smooth={true} duration={500}>
              Section 3
            </Link>
            {/* Add more ScrollSpy links as needed */}
          </Col>
          <Col>
            <Button onClick={scrollToNext}>Next</Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default NavBar;
