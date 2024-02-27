import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import countries from "./countries";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const Personal = () => {
  const [country, setCountry] = useState("us");
  const [Number, setNumber] = useState("");
  useEffect(() => {
    console.log(Number);
  }, [Number]);
  return (
    <Container className="mt-5">
      <h4>Settings</h4>
      <p>Manage your team members and their account permissions here.</p>
      <Row className="mt-4 p-1">
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
          <h6>Personal info</h6>
          <hr />
          <div>
            <label htmlFor="text" className="Profile-label3">
              Firstname
            </label>
            <InputGroup size="lg">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                className="Profile-input mb-2"
              />
            </InputGroup>
          </div>
          <div>
            <label htmlFor="text" className="Profile-label3">
              Lastname
            </label>
            <InputGroup size="lg">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                className="Profile-input mb-2"
              />
            </InputGroup>
          </div>
          <div>
            <label htmlFor="text" className="Profile-label3">
              User name
            </label>
            <InputGroup className="mb-3">
              <InputGroup.Text>Sassworkplace</InputGroup.Text>
              <Form.Control
                aria-label="First name"
                style={{ height: "50px" }}
              />
            </InputGroup>
          </div>
          <div>
            <label htmlFor="text" className="Profile-label3">
              Job Title
            </label>
            <InputGroup size="lg">
              <Form.Control
                placeholder="UIUX Designer"
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                className="Profile-input mb-2"
              />
            </InputGroup>
          </div>
          <div>
            <label htmlFor="text" className="Profile-label3">
              Email Address
            </label>
            <InputGroup size="lg" className="Profile-input">
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                className="Profile-input mb-2n"
              />
            </InputGroup>
          </div>
          <div>
            <label htmlFor="number" className="text-bold fw-bold">
              Phone Number
            </label>
            <PhoneInput
              className="mt-0"
              inputClass=" border rounded-3 p-4 m-3 "
              country={country}
              placeholder="Enter Phone Number"
              onChange={(value) => {
                setNumber(value);
                setCountry();
              }}
              countryCodeEditable={false}
            />
          </div>
          <div>
            <label htmlFor="text" className="Profile-label3">
              Country
            </label>
            <Form.Select aria-label="Select Country">
              {countries.map((country) => (
                <option key={country.code} value={country.name}>
                  <img
                    src={country.logo}
                    alt={country.name}
                    style={{ marginRight: "10px", height: "20px" }}
                  />
                  {country.name}
                </option>
              ))}
            </Form.Select>
          </div>
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
export default Personal;
