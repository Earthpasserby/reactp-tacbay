import React, { useState } from "react";
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
import zxcvbn from "zxcvbn";

function Passwordpage() {
  const [type, setType] = useState("input");
  const [score, setScore] = useState(null);
  const showHide = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let currentType = type === "input" ? "password" : "input";
    setType(currentType);
  };
  const testStrengthPassword = (e) => {
    if (e.target.value !== "") {
      let pass = zxcvbn(e.target.value);
      setScore(pass.score);
    } else {
      setScore(null);
    }
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
      default:
        return "none";
    }
  };

  const createPassLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Good";
      case 3:
        return "Strong";
      case 4:
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
        <div className="form-group">
          <label>New password</label>
          <input
            type="password"
            className="form-control input-password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <span className="assword" onClick={showHide}>
            {type === "input" ? <FiEye /> : <FiEye />}
          </span> */}
          <label>Confirm password</label>
          <input
            type="password"
            className="form-control input-password"
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* <span className="assword" onClick={showHide}>
            {type === "input" ? <FiEye /> : <FiEye />}
          </span> */}
          <div className="mt-3 d-flex justify-content-between">
            <h6>Password Strength</h6>
            <p style={{ color: funcProgressColor() }}>{createPassLabel()}</p>
          </div>
          <div className="progress mt-2" style={{ height: "10px" }}>
            <div className="progress-bar" style={changePasswordColor()}></div>
          </div>
        </div>
        {/* <div className="label-password">
          <input
            type={type}
            className="input-password"
            onChange={testStrengthPassword}
          />
          <span className="show-password" onClick={showHide}>
            {type === "input" ? "Hide" : "show"}
          </span>
          
        </div> */}
        <br />
        <div>
          <label className="label-password">
            New password
            <input
              type={type}
              className="input-password"
              onChange={testStrengthPassword}
              minlength="4"
              maxlength="12"
            />
            <span className="show-password" onClick={showHide}>
              {type === "input" ? <FiEye /> : <FiEye />}
            </span>
          </label>
          <label className="label-password mt-5">
            Confirm password
            <input
              type={type}
              className="input-password"
              onChange={testStrengthPassword}
              minlength="4"
              maxlength="12"
            />
            <span className="show-password" onClick={showHide}>
              {type === "input" ? <FiEye /> : <FiEye />}
            </span>
          </label>

          <span data-score={score} id="bar"></span>
          {/* <Form>
            <div className="">
              <InputGroup>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  type={type}
                  className="input-password"
                  onChange={testStrengthPassword}
                  id="password"
                />
                <span className="show-password" onClick={showHide}>
                  {type === "input" ? <FiEye /> : <FiEye />}
                </span>
              </InputGroup>
            </div>

            <label htmlFor="text" className="mt-3">
              Confirm password
            </label>

            <div className="">
              <InputGroup>
                <Form.Control
                  aria-label="Large"
                  aria-describedby="inputGroup-sizing-sm"
                  placeholder="********"
                  id="password"
                  type={type}
                  className="input-password"
                  onChange={testStrengthPassword}
                />
                <span className="show-password" onClick={showHide}>
                  {type === "input" ? <FiEye /> : <FiEye />}
                </span>
                <span data-score={score} id="bar"></span>
              </InputGroup>
            </div>
          </Form> */}
        </div>

        <div className="mt-5">
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
