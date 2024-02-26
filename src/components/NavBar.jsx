import React, { useState } from "react";
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

const NavBar = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <Navbar>
        <Container>
          <Navbar.Brand href="#">
            <Image src="./images/tacbay.png" alt="logo" className="img-fluid" />
          </Navbar.Brand>
          <Nav className="me-auto">
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
                    width: "450px",
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
            <Nav.Link className="toogle-icon mt-2">
              <BsBrightnessHigh />
            </Nav.Link>
          </Nav>
          <Nav className="">
            <Button variant="outline-success" className="me-2">
              Login
            </Button>
            <Button className="me-2">Sign Up</Button>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};
export default NavBar;
