import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Row, Button, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Houserule = () => {
  return (
    <>
      <Container className="kontainer">
        <Image
          src="./images/tacbay.png"
          alt="logo"
          className="mx-auto d-block img"
        />
        <Row className="Row mx-auto d-block mt-4">
          <h6
            className="text-center H-heading"
            style={{ width: "457px", height: "32px" }}
          >
            House Keeping Rules
          </h6>
          <h6
            className="text-center h-p"
            style={{ width: "452px", height: "72px" }}
          >
            To guarantee a smooth and delightful experience for both you and our
            users, we kindly ask you to acquaint yourself with our house keeping
            rules:
          </h6>
          <div className="cont mt-2">
            <FaCheckCircle
              className="text-success me-1 fa"
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
              className="text-success me-1 fa"
              style={{ width: "24px", height: "24px" }}
            />
            <p
              className="fw-semibold"
              style={{ width: "405px", height: "48px" }}
            >
              Any communication outside the TACBay policy and intent is at the
              user's risk.
            </p>
          </div>
          <div className="cont">
            <FaCheckCircle
              className="text-success me-1 fa"
              style={{ width: "24px", height: "24px" }}
            />
            <p
              className="fw-semibold"
              style={{ width: "412px", height: "48px" }}
            >
              Always use the Share my Location button under chats whenever you
              deem fit.
            </p>
          </div>
          <div className="cont">
            <FaCheckCircle
              className="text-success me-1 fa"
              style={{ width: "24px", height: "24px" }}
            />
            <p style={{ width: "412px", height: "24px" }}>
              Report any violation of policy by using "Need Help Button"
            </p>
          </div>
          <Link to="/CreateAcc" style={{ textDecoration: "none" }}>
            <div className="d-grid mt-4">
              <Button
                type="btn"
                className="text-center btn-lg border rounded-4 "
                style={{
                  height: "56px",
                  background: "#0095BE",
                }}
              >
                Continue
              </Button>
            </div>
          </Link>
        </Row>
      </Container>
      <Container>
        <Image
          src="./images/tacbay.png"
          alt="logo"
          className="mx-auto d-block img"
        />
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
            <div style={{ width: "457px", height: "108px" }}>
              <h6 className=" H-heading">House Keeping Rules</h6>
              <p className="h-p">
                To guarantee a smooth and delightful experience for both you and
                our users, we kindly ask you to acquaint yourself with our house
                keeping rules:
              </p>
            </div>

            <div>
              <p className="fw-semibold">
                <FaCheckCircle className="text-success me-1 fa" />
                Always use the Share my Location button under chats whenever you
                deem fit.
              </p>
              <p>
                <FaCheckCircle className="text-success me-1 fa" />
                Report any violation of policy by using "Need Help Button"
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Houserule;
