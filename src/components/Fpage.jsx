import React from "react";
// import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import { Button, Container, Row, Image, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function Fpage() {
  return (
    <Container>
      <Image
        src="./images/tacbay.png"
        alt="logo"
        className="mx-auto d-block img"
      />
      <Row className="row mx-auto d-block mt-4">
        <h5 className="text-center f-heading">Choose Your Language</h5>
        <Form className="mt-4">
          <label className="d-flex justify-content-between">
            English
            <input type="radio" value={"english"} className="" />
          </label>
          <hr />
          <label className="d-flex justify-content-between">
            Hausa
            <input type="radio" value={"english"} />
          </label>
          <hr />
          <label className="d-flex justify-content-between">
            Yoruba
            <input type="radio" value={"english"} />
          </label>
          <hr />
          <label className="d-flex justify-content-between">
            Igbo
            <input type="radio" value={"english"} />
          </label>
          <hr />
          <label className="d-flex justify-content-between">
            Edo
            <input type="radio" value={"english"} />
          </label>
          <hr />
          <label className="d-flex justify-content-between">
            Ijaw
            <input type="radio" value={"english"} />
          </label>
          <hr />
          <label className="d-flex justify-content-between">
            Pidgin
            <input type="radio" value={"english"} />
          </label>
          <Button type="btn" className="text-center btn-lg">
            Next
          </Button>
        </Form>
      </Row>
    </Container>
  );
}
export default Fpage;
