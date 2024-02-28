import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Image,
  Navbar,
  Nav,
  InputGroup,
  Form,
} from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { BsBrightnessHigh } from "react-icons/bs";

const NavBar = ({ theme, setTheme }) => {
  const toogle_mode = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Container className="justify-content-center">
        <Navbar expand="lg">
          <Image
            src="./images/tacbay.png"
            alt="logo"
            className="img-fluid logo"
          />
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
              <BsBrightnessHigh
                onClick={() => {
                  toogle_mode();
                }}
              />
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
    </>
  );
};
export default NavBar;
