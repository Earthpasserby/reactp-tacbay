import React, { useState } from "react";
import { Container, Image, Row, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEye } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
import zxcvbn from "zxcvbn";

function Passwordpage() {
  const [type, setType] = useState("input");
  const hideShow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let currentType = type === "input" ? "password" : "input";
    setType(currentType);
  };
  const showHide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let currentType = type === "input" ? "password" : "input";
    setType(currentType);
  };

  /* new color*/
  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#EA1111";
      case 2:
        return "#ffad00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      case 5:
        return "#00b500";
      default:
        return "none";
    }
  };

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "";
      case 1:
        return "Weak";
      case 2:
        return "Good";
      case 3:
        return "Strong";
      case 4:
        return "Very Strong";
      case 5:
        return "Very Strong";
      default:
        return "none";
    }
  };

  const [password, setPassword] = useState("");
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: "10px",
  });
  return (
    <Container className="kontainer mt-5">
      <Image
        src="./images/tacbay.png"
        alt="logo"
        className="mx-auto d-block img"
      />
      <Row className="Row mx-auto d-block mt-4">
        <h5 className="text-center f-heading fw-bold">Create Your Password</h5>
        <p className="text-center">
          To ensure the security of your account, please create a robust
          password.
        </p>
        <div className="form-group label-password">
          <div className="mt-2">
            <label className="text-bold fw-semibold">New password</label>
            <input
              type={type}
              className="form-control input-password"
              placeholder="password"
              maxLength={12}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="show-password" onClick={hideShow}>
              {type === "input" ? <FiEye /> : <FiEye />}
            </span>
          </div>
          <div className="mt-2">
            <label className="text-bold fw-semibold">Confirm password</label>
            <input
              type={type}
              className="form-control input-password"
              placeholder="password"
              maxLength={12}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span className="secondShow-password" onClick={showHide}>
              {type === "input" ? <FiEye /> : <FiEye />}
            </span>
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <p>Password Strength</p>
            <p style={{ color: funcProgressColor(), fontWeight: "bold" }}>
              {createPassLabel()}
            </p>
          </div>
          <div className="progress" style={{ height: "10px" }}>
            <div className="progress-bar" style={changePasswordColor()}></div>
          </div>
        </div>
        <div className="mt-2">
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
          <Button
            type="btn"
            className="text-center btn-lg border rounded-3 fs-6 fw-semibold"
            style={{ height: "56px", background: "#0095BE" }}
          >
            Create Account
          </Button>
        </div>
      </Row>
      <div className="box">
        <div className="input-with-icon form-control">
          <input type="text" className="custom-input" />
        </div>
      </div>
    </Container>
  );
}
export default Passwordpage;
