import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import countries from "./countries";

const Lang = () => {
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
          <h6>App Language</h6>
          <hr />
          <div>
            <label>Select Language</label>
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
export default Lang;
