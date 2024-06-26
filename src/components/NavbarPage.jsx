import React, { useState } from "react";
import { Container, Row, Button, Image, Col } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import zxcvbn from "zxcvbn";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { IoEyeOffOutline } from "react-icons/io5";
import PWDRequisite from "./PWDRequisite";

const NavbarPage = () => {
  const [type, setType] = useState("input");
  const [pwdRequiste, setPWDRquisite] = useState(false);
  const [checks, setChecks] = useState({
    capsLetterCheck: false,
    numberCheck: false,
    pwdLengthCheck: false,
    specialCharCheck: false,
  });

  /* validtion*/
  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };

  const handleOnFocus = () => {
    setPWDRquisite(true);
  };

  const handleOnBlur = () => {
    setPWDRquisite(false);
  };

  const handleOnKeyUp = (e) => {
    const { value } = e.target;
    const capsLetterCheck = /[A-Z]/.test(value);
    const numberCheck = /[0-9]/.test(value);
    const pwdLengthCheck = value.length >= 12;
    const specialCharCheck = /[!@#$%^&*]/.test(value);
    setChecks({
      capsLetterCheck,
      numberCheck,
      pwdLengthCheck,
      specialCharCheck,
    });
  };

  // const hideShow = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   let currentType = type === "input" ? "password" : "input";
  //   setType(currentType);
  // };
  // const showHide = (e) => {
  //   e.preventDefault();
  //   e.stopPropagation();
  //   let currentType = type === "input" ? "password" : "input";
  //   setType(currentType);
  // };

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
      <Row>
        <Col
          sm={5}
          className="d-flex justify-content-center Reset"
          style={{
            marginTop: "12rem",
          }}
        >
          <div>
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
                  onChange={handleOnChange}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  onKeyUp={handleOnKeyUp}
                  // onChange={(e) => setPassword(e.target.value)}
                />
                {type === "password" ? (
                  <span
                    className="show-password"
                    onClick={(showHide) => setType("text")}
                  >
                    <FiEye />
                  </span>
                ) : (
                  <span
                    className="show-password"
                    onClick={(hideShow) => setType("password")}
                  >
                    <IoEyeOffOutline />
                  </span>
                )}
              </div>

              <div className="mt-2">
                <label className="text-bold fw-semibold">
                  Confirm password
                </label>
                <input
                  type={type}
                  className="form-control input-password"
                  placeholder="password"
                  maxLength={12}
                  onChange={handleOnChange}
                  onFocus={handleOnFocus}
                  onBlur={handleOnBlur}
                  onKeyUp={handleOnKeyUp}
                />
                {type === "password" ? (
                  <span
                    className="secondShow-password"
                    onClick={() => setType("text")}
                  >
                    <FiEye />
                  </span>
                ) : (
                  <span
                    className="secondShow-password"
                    onClick={() => setType("password")}
                  >
                    <IoEyeOffOutline />
                  </span>
                )}
              </div>
              <div className="mt-3 d-flex justify-content-between">
                <p>Password Strength</p>
                <p style={{ color: funcProgressColor(), fontWeight: "bold" }}>
                  {createPassLabel()}
                </p>
              </div>
              <div className="progress" style={{ height: "10px" }}>
                <div
                  className="progress-bar"
                  style={changePasswordColor()}
                ></div>
              </div>
            </div>
            {pwdRequiste ? (
              <PWDRequisite
                capsLetterFlag={checks.capsLetterCheck ? "valid" : "invalid"}
                numberFlag={checks.numberCheck ? "valid" : "invalid"}
                pwdLengthFlag={checks.pwdLengthCheck ? "valid" : "invalid"}
                specialCharFlag={checks.specialCharCheck ? "valid" : "invalid"}
              />
            ) : null}
            <Link to="/Not" style={{ textDecoration: "none" }}>
              <div className="d-grid mt-4 mb-3">
                <Button
                  type="btn"
                  className="text-center btn-lg border rounded-4 "
                  style={{
                    height: "56px",
                    background: "#0095BE",
                  }}
                >
                  Reset password
                </Button>
              </div>
            </Link>
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
