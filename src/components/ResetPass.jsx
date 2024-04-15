import React, { useState, useEffect } from "react";
import { Container, Row, Button, Image, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

const ResetPass = () => {
  const [country, setCountry] = useState("us");
  const [Number, setNumber] = useState("");
  useEffect(() => {
    console.log(Number);
  }, [Number]);
  return (
    <Container fluid>
      <Row>
        <Col sm={5} className="p-5">
          <Image src="./images/tacbay.png" alt="logo" className="img-fluid" />
          <h5 className="">Reset Password</h5>
          <p className="">
            Enter your email, we’ll send you a verification code
          </p>
          <div>
            <label htmlFor="number">Phone Number</label>
            <PhoneInput
              className="mt-0"
              inputClass=" w-100 border rounded-3 p-4 m-3 "
              country={country}
              placeholder="Enter Phone Number"
              onChange={(value) => {
                setNumber(value);
                setCountry();
              }}
              countryCodeEditable={false}
            />
          </div>
          <Link to="/VCode" style={{ textDecoration: "none" }}>
            <div className="d-grid mt-4">
              <Button
                type="btn"
                className="text-center  btn-lg border rounded-4 "
                style={{
                  height: "56px",
                  background: "#0095BE",
                }}
              >
                Continue
              </Button>
            </div>
          </Link>
          <p
            className="text-center fw-bold "
            style={{
              color: "#0095BE",
            }}
          >
            Back to login screen
          </p>
        </Col>
        <Col sm={7} className="Nav-img">
          <Image
            src="./images/Container (1).png"
            alt="logo"
            className="img-fluid text-center"
          />
        </Col>
      </Row>
    </Container>
  );
};
export default ResetPass;
