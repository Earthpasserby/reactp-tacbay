import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Image, Row, Button, Form } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Houserule = () => {
  return (
    <Container>
      <Image
        src="./images/tacbay.png"
        alt="logo"
        className="mx-auto d-block img"
      />
      <Row className="row mx-auto d-block mt-4">
        <div>
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
        </div>
        <div className="">
          <p className="  " style={{ width: "417px", height: "24px" }}>
            <FaCheckCircle
              className="text-success me-1"
              style={{ width: "24px", height: "24px" }}
            />
            Please maintain respectful communication at all times.
          </p>
        </div>
        <div
          style={{
            width: "444px",
            height: "48px",
          }}
        >
          <p className=" " style={{ width: "405px", height: "48px" }}>
            <FaCheckCircle
              className="text-success me-1"
              style={{ width: "24px", height: "24px" }}
            />
            Any communication outside the TACBay policy and intent is at the
            user's risk.
          </p>
        </div>
        <div
          style={{
            width: "413px",
            height: "48px",
            top: "331px",
            left: "531px",
          }}
        >
          <p className="" style={{ width: "412px", height: "48px" }}>
            <FaCheckCircle
              className="text-success me-1"
              style={{ width: "24px", height: "24px" }}
            />
            Always use the Share my Location button under chats whenever you
            deem fit.
          </p>
        </div>
        <div
          style={{
            width: "444px",
            height: "48px",
            top: "331px",
            left: "531px",
          }}
        >
          <p className="" style={{ width: "412px", height: "24px" }}>
            <FaCheckCircle
              className="text-success me-1"
              style={{ width: "24px", height: "24px" }}
            />
            Report any violation of policy by using "Need Help Button"
          </p>
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
