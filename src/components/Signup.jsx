import React from "react";
import { Container, Image, Row, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  return (
    <Container>
      <Image
        src="./images/tacbay.png"
        alt="logo"
        className="mx-auto d-block img"
      />
      <Row className="row mx-auto d-block mt-4">
        <h5 className="text-center f-heading">Create Account</h5>
        <p>Get started by entering your mobile phone number</p>
        <div>
          <label htmlFor="number">Phone Number</label>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">
                @
              </span>
            </div>
            <input
              type="number"
              placeholder="+1 (555) 464-4646"
              className="form-control mt-2"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
        <div>
          <p>
            <input type="checkbox" /> I agree to Tacbay's
            <span>Terms of Service,</span> and acknowledge the
            <span> Privacy Policy.</span>
          </p>
          <div className="d-grid mt-4">
            <Button type="btn" className="text-center btn-lg border rounded-4">
              Create Account
            </Button>
          </div>
          <p className="mt-2 my-4">
            Already have an account? <span>Log in</span>
          </p>
        </div>
        <div className="d-grid mt-4">
          <Button
            type="btn"
            variant="Secondary"
            className="text-center btn-lg  border rounded-4"
          >
            Continue with Google
          </Button>
        </div>
        <div className="d-grid mt-4">
          <Button
            type="btn"
            variant="Secondary"
            className="text-center btn-lg border rounded-4"
          >
            Continue with Facebook
          </Button>
        </div>
        <div className="d-grid mt-4">
          <Button
            type="btn"
            variant="Secondary"
            className="text-center btn-lg  border rounded-4"
          >
            Continue with Apple
          </Button>
        </div>
      </Row>
    </Container>
  );
}
export default Signup;
