import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Button,
  FormControl,
  Form,
  Col,
  Row,
  Jumbotron,
  InputGroup,
  Dropdown,
  Image,
} from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
const MainPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
  };
  return (
    <Container className="image-container">
      <Row className="mt-5">
        <Col sm={12}>
          <div>
            <Image src="./images/Rectangle 3.png" className="img-fluid" />
          </div>
          <div className="centered-text">
            <h4>Discover Skilled Artisans Near You</h4>
            <p>
              Explore a world of craftsmanship at your fingertips. Find reliable
              artisans in your neighborhood, ready to bring expertise to your
              doorstep.
            </p>
          </div>
        </Col>
      </Row>
      <div className="d-flex  jumbotron mx-auto">
        <div>
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
        </div>
        <div>
          <InputGroup>
            <InputGroup.Text>
              <IoLocationOutline />
            </InputGroup.Text>
            <Form.Select
              value={selectedOption}
              onChange={handleChange}
              style={{
                width: "400px",
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
        </div>
        <div>
          <Button variant="primary" className="btn-lg me-2">
            Search
          </Button>
        </div>
      </div>
    </Container>
    <Container>
     
    </Container>
  );
};
export default MainPage;
