import React from "react";
import { Container, Row, Button, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaCircleCheck } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <>
      <Container fluid className="NotificationPage">
        <Row className="NotificationLogin">
          <Col sm={12} className="NotPage ">
            <div>
              <div className="icon-container">
                <FaCircleCheck className="Notification text-center" />
              </div>
              <h6 className="text-center">Welcome to Tacbay! </h6>
              <p className="text-center">
                You're all set! Start discovering services and connecting with
                service providers in your area.
              </p>
              <Link to="/Houserule" style={{ textDecoration: "none" }}>
                <div className="d-grid mt-3 ">
                  <Button
                    type="btn"
                    className="text-center   btn-lg border rounded-4 "
                    style={{
                      height: "56px",
                      background: "#0095BE",
                    }}
                  >
                    Start Exploring
                  </Button>
                </div>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Welcome;
