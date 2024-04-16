import React, { useState } from "react";
import { Container, Image, Row, Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEye } from "react-icons/fi";
import { IoEyeOffOutline } from "react-icons/io5";
import { FaRegCircle } from "react-icons/fa";
import { FaCircleCheck } from "react-icons/fa6";
import zxcvbn from "zxcvbn";

function Passwordpage() {
  const [type, setType] = useState("password");
  const [lengthValidated, setLengthValidated] = useState(false);
  const [upperValidated, setUpperValidated] = useState(false);
  const [numberValidated, setNumberValidated] = useState(false);
  const [specialValidated, setSpecialValidated] = useState(false);

  const handlechange = (value) => {
    //regex
    const length = new RegExp("(?=.*[12,])");
    const upper = new RegExp("(?=.*[A-Z])");
    const number = new RegExp("(?=.*[0-9])");
    const special = new RegExp("(?=.*[!@#$%^&*])");

    //lenthcase
    if (length.test(value)) {
      setLengthValidated(true);
    } else {
      setLengthValidated(false);
    }
    //uppercase
    if (upper.test(value)) {
      setUpperValidated(true);
    } else {
      setUpperValidated(false);
    }
    //number
    if (number.test(value)) {
      setNumberValidated(true);
    } else {
      setNumberValidated(false);
    }
    //special
    if (special.test(value)) {
      setSpecialValidated(true);
    } else {
      setSpecialValidated(false);
    }
  };
  // const [type, setType] = useState("input");
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
              onChange={(e) => handlechange(e.target.value)}
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
            <label className="text-bold fw-semibold">Confirm password</label>
            <input
              type={type}
              className="form-control input-password"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
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
      <main className="tracker-box">
        <div className={lengthValidated ? "validated" : "not-validated"}>
          {lengthValidated ? (
            <span className="list-icon green">
              <FaCircleCheck />
            </span>
          ) : (
            <span className="list-icon green">
              <FaCircleCheck />
            </span>
          )}
          Minimum 12 characters
        </div>
        <div className={upperValidated ? "validated" : "not-validated"}>
          Use a mix of uppercase and lowercase letters
        </div>
        <div className={numberValidated ? "validated" : "not-validated"}>
          Include at least one number
        </div>
        <div className={specialValidated ? "validated" : "not-validated"}>
          Add at least one special character (!@#$%)
        </div>
      </main>
      {/* <div className="box">
        <div className="input-with-icon form-control">
          <input type={type} className="custom-input" />
          {type === "password" ? (
            <span className="icon-span" onClick={() => setType("text")}>
              <FiEye size={18} />
            </span>
          ) : (
            <span className="icon-span" onClick={() => setType("password")}>
              <IoEyeOffOutline size={18} />
            </span>
          )}
        </div>
      </div> */}

      <div className="wrapper tracker-box">
        <div className="pass-field">
          <input
            type="password"
            placeholder="Create password"
            style={{ width: 200, height: 20 }}
          />
          <FiEye />
        </div>
        <div className="content">
          <p>Password must contain</p>
          <ul className="requirement-list">
            <li>
              <FaCircleCheck />
              <span> Minimum 12 characters </span>
            </li>
            <li>
              <FaCircleCheck />
              <span> Use a mix of uppercase and lowercase letters </span>
            </li>
            <li>
              <FaCircleCheck />
              <span> Include at least one number </span>
            </li>
            <li>
              <FaCircleCheck />
              <span> Add at least one special character (!@#$%) </span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}
export default Passwordpage;
