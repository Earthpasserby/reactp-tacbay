import React from "react";
import { Button, Container, Row, Image, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function Fpage() {
  return (
    <Container className="kontainer mt-5 p-4">
      <Image
        src="./images/tacbay.png"
        alt="logo"
        className="mx-auto d-block img"
      />
      <Row className="Row mx-auto d-block mt-4">
        <h5 className="text-center f-heading fw-bold">Choose Your Language</h5>
        <Form className="mt-4">
          <label className="d-flex justify-content-between fw-medium">
            English
            <input type="radio" value={"english"} />
          </label>
          <hr />
          <label className="d-flex justify-content-between fw-medium">
            Hausa
            <input type="radio" value={"english"} />
          </label>
          <hr />
          <label className="d-flex justify-content-between fw-medium">
            Yoruba
            <input type="radio" value={"english"} />
          </label>
          <hr />
          <label className="d-flex justify-content-between fw-medium">
            Igbo
            <input type="radio" value={"english"} />
          </label>
          <hr />
          <label className="d-flex justify-content-between fw-medium">
            Edo
            <input type="radio" value={"english"} />
          </label>
          <hr />
          <label className="d-flex justify-content-between fw-medium">
            Ijaw
            <input type="radio" value={"english"} />
          </label>
          <hr />
          <label className="d-flex justify-content-between fw-medium">
            Pidgin
            <input type="radio" value={"english"} />
          </label>
          <Link to="/Signup">
            <div className="d-grid mt-5 p-1">
              <Button
                type="btn"
                className="text-center fw-bold fw-medium rounded-3"
              >
                Next
              </Button>
            </div>
          </Link>
        </Form>
      </Row>
    </Container>
  );
}
export default Fpage;
