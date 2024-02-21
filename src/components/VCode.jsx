import React, { useState } from "react";
import { Container, Row, Button, Image, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaArrowLeft } from "react-icons/fa6";

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
        <Col sm={5} className="p-5">
          <Image src="./images/tacbay.png" alt="logo" className="img-fluid" />

          <h5 className="">Verification Number</h5>
          <p className="">
            We've sent a verification code to the phone number you provided.
            Please enter the code below to proceed.
          </p>
          <div className="otp-VCode ">
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
          <div className="d-grid mt-4">
            <Button
              type="btn"
              className="text-center  btn-lg border rounded-4 "
            >
              Continue
            </Button>
          </div>
          <p className="mt-1 my-2 text-center pagev-p2">
            You did not receive the code?
            <span className="text-primary mx-1 fs-6 fw-semibold">
              Send again
            </span>
          </p>
          <div className="d-grid ">
            <Button
              type="btn"
              variant="Secondary"
              className="text-center btn-lg  border rounded-4 "
            >
              <FaArrowLeft />
              <span className="mx-2 button-text">Back to the main page</span>
            </Button>
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
