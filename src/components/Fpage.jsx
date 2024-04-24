import React from "react";
import { Button, Container, Row, Image } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Fpage() {
  return (
    <>
      <Container className="d-flex flex-column align-items-center kontainer ">
        <Image src="./images/tacbay.png" alt="logo" className="img-fluid" />
        <Row className="Row mt-2">
          <h5 className=" f-heading fw-bold">Choose Your Language</h5>
          <div className="radio-container">
            <label className="d-flex justify-content-between fw-medium">
              English
              <input type="radio" value={"english"} />
            </label>
            <label className="d-flex justify-content-between fw-medium mt-4">
              Hausa
              <input type="radio" value={"english"} />
            </label>
            <label className="d-flex justify-content-between fw-medium mt-4">
              Yoruba
              <input type="radio" value={"english"} />
            </label>

            <label className="d-flex justify-content-between fw-medium mt-4">
              Igbo
              <input type="radio" value={"english"} />
            </label>

            <label className="d-flex justify-content-between fw-medium mt-4">
              Edo
              <input type="radio" value={"english"} />
            </label>

            <label className="d-flex justify-content-between fw-medium mt-4">
              Ijaw
              <input type="radio" value={"english"} />
            </label>

            <label className="d-flex justify-content-between fw-medium mt-4">
              Pidgin
              <input type="radio" value={"english"} />
            </label>
            <Link to="/Signup" style={{ textDecoration: "none" }}>
              <div className="d-grid mt-5 p-1">
                <Button
                  type="btn"
                  className="text-center fw-bold fw-medium rounded-3"
                  style={{ height: "50px", background: "#0095BE" }}
                >
                  Next
                </Button>
              </div>
            </Link>
          </div>
        </Row>
      </Container>
    </>
  );
}
export default Fpage;
