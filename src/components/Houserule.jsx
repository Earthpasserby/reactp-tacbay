import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Row, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Houserule = () => {
  return (
    <>
      <Container className="d-flex flex-column align-items-center kontainer">
        <Image src="./images/tacbay.png" alt="logo" className="img-fluid" />
        <Row className="HouseRule-Row">
          <h6 className="text-center H-heading" style={{ width: "457px" }}>
            House Keeping Rules
          </h6>
          <h6 className="text-center h-p">
            To guarantee a smooth and delightful experience for both you and our
            users, we kindly ask you to acquaint yourself with our house keeping
            rules:
          </h6>
          <div className="cont mt-2">
            <FaCheckCircle
              className="text-success  fa"
              style={{ width: "24px", height: "24px" }}
            />

            <p
              className="fw-semibold"
              style={{ width: "417px", height: "24px" }}
            >
              Please maintain respectful communication at all times.
            </p>
          </div>
          <div className="cont mt-3">
            <FaCheckCircle
              className="text-success  fa"
              style={{ width: "24px", height: "24px" }}
            />
            <p
              className="fw-semibold"
              style={{ width: "444px", height: "48px" }}
            >
              Any communication outside the TACBay policy and intent is at the
              user's risk.
            </p>
          </div>
          <div className="cont">
            <FaCheckCircle
              className="text-success  fa"
              style={{ width: "24px", height: "24px" }}
            />
            <p
              className="fw-semibold"
              style={{
                width: "444px",
                height: "48px",
                top: "401px",
                left: "531px",
              }}
            >
              Always use the Share my Location button under chats whenever you
              deem fit.
            </p>
          </div>
          <div className="cont">
            <FaCheckCircle
              className="text-success  fa"
              style={{ width: "24px", height: "24px" }}
            />
            <p
              style={{ width: "412px", height: "24px" }}
              className="fw-semibold"
            >
              Report any violation of policy by using "Need Help Button"
            </p>
          </div>
          <Link to="/CreateAcc" style={{ textDecoration: "none" }}>
            <div className="d-grid mt-3 ">
              <Button
                type="btn"
                className="text-center btn-lg border rounded-4 "
                style={{
                  height: "56px",
                  // width: "449px",
                  background: "#0095BE",
                }}
              >
                Continue
              </Button>
            </div>
          </Link>
        </Row>
      </Container>
    </>
  );
};
export default Houserule;
