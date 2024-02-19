import React from "react";
import {
  Container,
  Image,
  Row,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEye } from "react-icons/fi";
function Passwordpage() {
  const password = document.querySelector("#password");
  const strengthContainer = document.querySelector(".strength-container");
  const strengthBar = document.querySelector("#bar");

  function setStrength(value) {
    value = 20;
    strengthBar.computedStyleMap.width = value + "%";
  }
  function setColor(color) {
    strengthBar.Style.backgroundColor = color;
  }

  function clearStrength() {
    strengthBar.style.width = 0;
    strengthBar.Style.backgroundColor = "";
  }

  password.addEventListener("keyup", checkpasswordStrength);
  function checkpasswordStrength() {
    let strength = 0;

    if (password.value === "") {
      clearStrength();
      return false;
    }
    if (password.value.match(/\s/)) {
      setColor("red", "white spacing not allowed");
      return false;
    }
    if (password.value.match(/<>/)) {
      setColor("red", "characters are not allowed");
      return false;
    }
    if (password.value.length > 12) {
      setColor("red", "password is greater than 12 char");
      return false;
    }
  }

  return (
    <Container>
      <Image
        src="./images/tacbay.png"
        alt="logo"
        className="mx-auto d-block img"
      />
      <Row className="row mx-auto d-block mt-4">
        <h5 className="text-center f-heading">Create Your Password</h5>
        <p className="text-center">
          To ensure the security of your account, please create a robust
          password.
        </p>
        <div className="">
          <label htmlFor="text" className="t">
            New password
          </label>
          <Form>
            <div className="password-container">
              <InputGroup>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  type="password"
                  id="password"
                  className="Passw-input mb-2"
                />
                <span className="Pass-btn">
                  <FiEye />
                </span>
              </InputGroup>
            </div>
          </Form>
        </div>
        <div className="">
          <label htmlFor="text" className="t">
            Confirm password
          </label>
          <Form>
            <div className="password-container">
              <InputGroup>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="********"
                  id="password"
                  type="password"
                  className="Passw-input mb-2"
                />
                <span className="Pass-btn">
                  <FiEye />
                </span>
              </InputGroup>
            </div>
          </Form>
        </div>
        <div className="strength-container">
          <div className=" d-flex justify-content-between">
            <p>password strength</p>
            <p>very strong</p>
          </div>
          <div className="progress">
            <div id="bar"></div>
          </div>
        </div>
        <div>
          <Form className="mt-1">
            <label className="pass-label1">
              <input
                type="radio"
                value={"english"}
                className="me-1 pas-input "
              />
              Minimum 12 characters
            </label>
          </Form>
        </div>
        <div>
          <Form className="mt-1">
            <label className="pass-label1">
              <input
                type="radio"
                value={"english"}
                className="me-1 pas-input"
              />
              Use a mix of uppercase and lowercase letters
            </label>
          </Form>
        </div>
        <div>
          <Form className="mt-1">
            <label className="pass-label1">
              <input
                type="radio"
                value={"english"}
                className="me-1 pas-input "
              />
              Include at least one number
            </label>
          </Form>
        </div>
        <div>
          <Form className="mt-1">
            <label className="pass-label1">
              <input
                type="radio"
                value={"english"}
                className="me-1 pas-input"
              />
              Add at least one special character (!@#$%)
            </label>
          </Form>
        </div>
        <div className="d-grid mt-4">
          <Button type="btn" className="text-center btn-lg border rounded-4 ">
            Create Account
          </Button>
        </div>
      </Row>
    </Container>
  );
}
export default Passwordpage;
