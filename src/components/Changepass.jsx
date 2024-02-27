import React, { useState } from "react";
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
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Changepass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
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
          <h6>Change Password</h6>
          <hr />
          <div className="">
            <label>Current Password</label>
            <InputGroup
              className="mb-3 mt-2 border-end-0"
              style={{ width: "400px" }}
            >
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                style={{ height: "40px" }}
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
          </div>{" "}
          <div className="">
            <label>New Password</label>
            <InputGroup
              className="mb-3 mt-2 border-end-0"
              style={{ width: "400px" }}
            >
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                style={{ height: "40px" }}
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
          </div>
          <div className="">
            <label>Confirm Password</label>
            <InputGroup
              className="mb-3 mt-2 border-end-0"
              style={{ width: "400px" }}
            >
              <Form.Control
                type={showPassword ? "text" : "password"}
                placeholder="*********"
                style={{ height: "40px" }}
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
          </div>
          <div className="mt-4">
            <h5>Reset Password</h5>
            <p>Forgot your password? No worries, you can easily reset it</p>
            <Button type="btn" className="text-center btn-dark rounded-3">
              Reset Password
            </Button>
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
export default Changepass;
