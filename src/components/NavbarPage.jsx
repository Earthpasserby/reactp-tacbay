import React, { useState } from "react";
import { Container, Row, Button, Image, Col } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import zxcvbn from "zxcvbn";
import "bootstrap/dist/css/bootstrap.min.css";

const NavbarPage = () => {
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
    <Container fluid className="">
      <Row className="justify-content-center">
        <Col sm={5} className="Nav-password p-5">
          <Image src="./images/tacbay.png" alt="logo" className="img-fluid" />

          <h5 className="">Reset Password</h5>
          <p className="">
            The verification code has been arrived in you inbox.
          </p>
          <div className="form-group label-password">
            <div className="mt-2">
              <label className="text-bold fw-bold">New password</label>
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
              <label className="text-bold fw-bold">Confirm password</label>
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

          <div className="d-grid mt-4">
            <Button type="btn" className="text-center btn-lg border rounded-4 ">
              Reset password
            </Button>
          </div>
        </Col>
        <Col sm={7} className="Nav-img">
          <Image
            src="./images/Container.png"
            alt="logo"
            className="img-fluid text-center"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default NavbarPage;
