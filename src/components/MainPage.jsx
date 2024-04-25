import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Button,
  Form,
  Col,
  Row,
  InputGroup,
  Image,
} from "react-bootstrap";
import Category from "./Category";
import { IoLocationOutline } from "react-icons/io5";
import NavBar from "./NavBar";
import ButtonP from "./ButtonP";

const MainPage = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <NavBar className="bg-white" />
      <Container fluid className="image-container">
        <Row>
          <Col sm={12} className="MP">
            <div>
              <Image src="./images/Rectangle 3.png" className="img-fluid" />
            </div>
            <div className="centered-text">
              <h4>Discover Skilled Artisans Near You</h4>
              <p>
                Explore a world of craftsmanship at your fingertips. Find
                reliable artisans in your neighborhood, ready to bring expertise
                to your doorstep.
              </p>
            </div>
          </Col>
        </Row>
        <div className="d-flex  jumbotron mx-auto mb-5">
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
        <ButtonP />
        <Category />
      </Container>
    </>
  );
};
export default MainPage;
