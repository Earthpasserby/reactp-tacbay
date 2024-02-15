import React from "react";
import {
  Container,
  Image,
  Row,
  Button,
  InputGroup,
  Form,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEye } from "react-icons/fi";
const Passwordpage = () => {
  return (
    <Container>
      <Image
        src="./images/tacbay.png"
        alt="logo"
        className="mx-auto d-block img"
      />
      <Row className="row mx-auto d-block mt-4">
        <h5 className="text-center f-heading">Create Your Password</h5>
        <p className="text-center">
          To ensure the security of your account, please create a robust
          password.
        </p>
        <div>
          <label htmlFor="text" className="t">
            New password
          </label>
          <Form>
            <InputGroup>
              <Form.Control
                aria-label="Large"
                aria-describedby="inputGroup-sizing-sm"
                placeholder="********"
                type="password"
                className=" mb-2"
              />
              <span className="Pass-btn">
                <FiEye />
              </span>
            </InputGroup>
          </Form>
        </div>
      </Row>
    </Container>
  );
};
export default Passwordpage;
