import React, { useState, useEffect } from "react";
import { Container, Image, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Link } from "react-router-dom";

function Signup() {
  const [country, setCountry] = useState("us");
  const [Number, setNumber] = useState("");
  useEffect(() => {
    console.log(Number);
  }, [Number]);
  return (
    <Container className="d-flex flex-column align-items-center kontainer">
      <Image src="./images/tacbay.png" alt="logo" className="img-fluid" />
      <Row className="Row ">
        <h5 className="text-center f-heading fw-bold">Create Account</h5>
        <p className="f-p2">Get started by entering your mobile phone number</p>
        <div>
          <label htmlFor="number">Phone Number</label>
          <PhoneInput
            className="mt-0"
            inputClass="border rounded-3"
            inputStyle={{ fontSize: "16px", width: "350px" }}
            country={country}
            onChange={(value) => {
              setNumber(value);
              setCountry();
            }}
            countryCodeEditable={false}
          />
        </div>
        <div className="mt-2 fw-medium">
          <p>
            <input type="checkbox" className="f-input" /> I agree to Tacbay's
            <span style={{ color: "#0095BE" }}> Terms of Service,</span> and
            acknowledge the
            <span style={{ color: "#0095BE" }}> Privacy Policy.</span>
          </p>
          <Link to="/Pagev" style={{ textDecoration: "none" }}>
            <div className="d-grid mt-4">
              <Button
                type="btn"
                className="text-center btn-lg border rounded-4 "
                style={{
                  height: "56px",
                  background: "#0095BE",
                }}
              >
                Create Account
              </Button>
            </div>
          </Link>

          <p className="mt-2 my-3 f-p fw-semibold">
            Already have an account?{" "}
            <span style={{ color: "#0095BE" }}>Log in</span>
          </p>
          <h6 className="f-line">OR</h6>
        </div>

        <div className="d-grid">
          <Button
            type="btn"
            variant="Secondary"
            className="text-center btn-lg  border rounded-4"
          >
            <FcGoogle />
            <span className="mx-2 button-text">Continue with Google</span>
          </Button>
        </div>
        <div className="d-grid mt-4">
          <Button
            type="btn"
            variant="Secondary"
            className="text-center btn-lg border rounded-4"
          >
            <FaFacebook />
            <span className="mx-3 button-text">Continue with Facebook</span>
          </Button>
        </div>
        <div className="d-grid mt-4">
          <Button
            type="btn"
            variant="Secondary"
            className="text-center btn-lg  border rounded-4"
          >
            <FaApple />
            <span className="mx-3 button-text">Continue with Apple</span>
          </Button>
        </div>
      </Row>
    </Container>
  );
}
export default Signup;
