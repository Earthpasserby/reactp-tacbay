import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Button, InputGroup, Form } from "react-bootstrap";
import { MdOutlineRemoveRedEye } from "react-icons/md";
const Settings = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <>
      <Container>
        <h4>Settings</h4>
        <p>Manage your team members and their account permissions here.</p>
        <Row>
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
            <h6>Delete Account</h6>
            <hr />
            <div className="">
              <InputGroup
                className="mb-3 border-end-0"
                style={{ width: "400px" }}
              >
                <Form.Control
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  style={{ height: "50px" }}
                  value={password}
                  maxLength={12}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Button
                  variant="outline-secondary"
                  onClick={togglePasswordVisibility}
                  className="border-start-0 border-light border-2"
                >
                  {showPassword ? (
                    <MdOutlineRemoveRedEye />
                  ) : (
                    <MdOutlineRemoveRedEye />
                  )}
                </Button>
              </InputGroup>

              <div className="mt-4">
                <Button
                  type="btn"
                  className="text-center btn-danger border rounded-4"
                >
                  Delete my account
                </Button>
              </div>
            </div>
            <hr />
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Settings;
