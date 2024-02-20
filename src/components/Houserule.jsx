import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Row, Button } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Houserule = () => {
  return (
    <Container>
      <Image
        src="./images/tacbay.png"
        alt="logo"
        className="mx-auto d-block img"
      />
      <Row className=" mx-auto d-block mt-4">
        <h6
          className="text-center H-heading"
          style={{ width: "457px", height: "32px" }}
        >
          House Keeping Rules
        </h6>
        <p
          className="text-center h-p"
          style={{ width: "452px", height: "72px" }}
        >
          To guarantee a smooth and delightful experience for both you and our
          users, we kindly ask you to acquaint yourself with our house keeping
          rules:
        </p>
        <div className="cont mt-2">
          <FaCheckCircle
            className="text-success me-1 fa"
            style={{ width: "24px", height: "24px" }}
          />

          <span style={{ width: "402px", height: "24px" }}>
            Please maintain respectful communication at all times.
          </span>
        </div>
        <div className="cont mt-3">
          <FaCheckCircle
            className="text-success me-1 fa"
            style={{ width: "24px", height: "24px" }}
          />
          <span className="f-span" style={{ width: "405px", height: "48px" }}>
            Any communication outside the TACBay policy and intent is at the
            user's risk.
          </span>
        </div>
        <div className="cont">
          <FaCheckCircle
            className="text-success me-1 fa"
            style={{ width: "24px", height: "24px" }}
          />
          <span className="T-span" style={{ width: "412px", height: "48px" }}>
            Always use the Share my Location button under chats whenever you
            deem fit.
          </span>
        </div>
        <div className="cont">
          <FaCheckCircle
            className="text-success me-1 fa"
            style={{ width: "24px", height: "24px" }}
          />
          <span style={{ width: "412px", height: "24px" }}>
            Report any violation of policy by using "Need Help Button"
          </span>
        </div>
        <div className="d-grid mt-4">
          <Button type="btn" className="text-center btn-lg border rounded-4 ">
            Continue
          </Button>
        </div>
      </Row>
    </Container>
  );
};
export default Houserule;
