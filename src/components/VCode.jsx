import React, { useState } from "react";
import { Container, Row, Button, Image, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const VCode = () => {
  const [otp, setOtp] = useState(new Array(5).fill(""));
  function handlechange(e, index) {
    if (isNaN(e.target.value)) return false;

    setOtp([
      ...otp.map((data, indx) => (indx === index ? e.target.value : data)),
    ]);

    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  }
  return (
    <Container fluid>
      <Row>
        <Col
          sm={5}
          className="d-flex justify-content-center Reset"
          style={{
            marginTop: "12rem",
          }}
        >
          <div>
            <h5 className=" f-heading fw-bold">Verify Your Number</h5>
            <p className="pagev-p ">
              We've sent a verification code to your phone number. Please enter
              the code to continue.
            </p>
            <div className="otp-area  justify-content-center">
              {otp.map((data, i) => {
                return (
                  <input
                    type="text"
                    value={data}
                    maxLength={1}
                    onChange={(e) => handlechange(e, i)}
                  />
                );
              })}
            </div>
            <Link to="/NavbarPage" style={{ textDecoration: "none" }}>
              <div className="d-grid mt-2">
                <Button
                  type="btn"
                  className="text-center  btn-lg border rounded-4 "
                  style={{ height: "56px", background: "#0095BE" }}
                >
                  Continue
                </Button>
              </div>
            </Link>
            <p className="my-2 text-center pagev-p fw-bold">
              You did not receive the code?
              <span
                className=" mx-1 fs-6 fw-semibold"
                style={{ color: "#0095BE" }}
              >
                Send again
              </span>
            </p>
            <Link to="/Fpage" style={{ textDecoration: "none" }}>
              <div className="d-grid mb-3 ">
                <Button
                  type="btn"
                  variant="Secondary"
                  className="text-center btn-lg  border rounded-4 "
                >
                  <FaArrowLeft />
                  <span className="mx-2 button-text ">
                    Back to the main page
                  </span>
                </Button>
              </div>
            </Link>
          </div>
        </Col>
        <Col sm={7} className="Nav-img">
          <Image
            src="./images/Container (2).png"
            alt="logo"
            className="img-fluid text-center"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default VCode;
