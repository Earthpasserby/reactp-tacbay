import React, { useState, useEffect } from "react";
import { Container, Row, Button, Image, Col } from "react-bootstrap";
import { FiEye } from "react-icons/fi";
import zxcvbn from "zxcvbn";
import "bootstrap/dist/css/bootstrap.min.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link } from "react-router-dom";
const CreateAcc = () => {
  const [type, setType] = useState("input");
  const hideShow = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let currentType = type === "input" ? "password" : "input";
    setType(currentType);
  };

  /* new color*/

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

  const [country, setCountry] = useState("us");
  const [Number, setNumber] = useState("");
  useEffect(() => {
    console.log(Number);
  }, [Number]);
  return (
    <>
      <Container fluid>
        <Row>
          <Col sm={5} className="d-flex justify-content-center mt-3  createAcc">
            <div>
              <Image
                src="./images/tacbay.png"
                alt="logo"
                className="img-fluid"
              />

              <h5 className="">It’s nice to see you again!</h5>
              <p className=" fw-semibold" style={{ color: "#344051" }}>
                Log in to continue to your account{" "}
              </p>
              <div className="form-group label-password">
                <div>
                  <label htmlFor="number" className="text-bold fw-bold">
                    Phone Number
                  </label>
                  <PhoneInput
                    inputClass="border rounded-3"
                    inputStyle={{
                      fontSize: "16px",
                      width: "363px",
                      height: "54px",
                    }}
                    country={country}
                    onChange={(value) => {
                      setNumber(value);
                      setCountry();
                    }}
                    countryCodeEditable={false}
                  />
                </div>
                <div className="mt-3">
                  <label className="text-bold fw-bold">Confirm password</label>
                  <input
                    type={type}
                    className="form-control CreateAcc-password"
                    placeholder="password"
                    maxLength={12}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>

                <div>
                  <div className="mt-2 d-flex justify-content-between">
                    <p className="fw-semibold" style={{ color: "#344051" }}>
                      {" "}
                      Remember me
                    </p>
                    <p
                      className="fw-bold"
                      style={{
                        color: "#0095BE",
                      }}
                    >
                      Forgot password?
                    </p>
                  </div>
                  <Link to="/Resetpass" style={{ textDecoration: "none" }}>
                    <div className="d-grid ">
                      <Button
                        type="btn"
                        className="text-center btn-lg border rounded-4 "
                        style={{
                          height: "56px",
                          background: "#0095BE",
                        }}
                      >
                        Log in
                      </Button>
                    </div>
                  </Link>
                </div>
              </div>
              <div>
                <p className="mt-2 my-4 f-p">
                  Don't have an account?{" "}
                  <span
                    className="fw-bold"
                    style={{
                      color: "#0095BE",
                    }}
                  >
                    Sign up!
                  </span>
                </p>
                <h6 className="f-line2 w-100">OR</h6>
              </div>
              <div className="d-grid mt-4">
                <Button
                  type="btn"
                  variant="Secondary"
                  className="text-center btn-lg  border rounded-4 "
                >
                  <FcGoogle />
                  <span className="mx-3 button-text ">
                    Continue with Google
                  </span>
                </Button>
              </div>
              <div className="d-grid mt-4">
                <Button
                  type="btn"
                  variant="Secondary"
                  className="text-center btn-lg border rounded-4"
                >
                  <FaFacebook />
                  <span className="mx-3 button-text">
                    Continue with Facebook
                  </span>
                </Button>
              </div>
              <div className="d-grid mt-4 mb-3">
                <Button
                  type="btn"
                  variant="Secondary"
                  className="text-center btn-lg  border rounded-4"
                >
                  <FaApple />
                  <span className="mx-3 button-text">Continue with Apple</span>
                </Button>
              </div>
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
    </>
  );
};
export default CreateAcc;
