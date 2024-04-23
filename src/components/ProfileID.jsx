import React from "react";
import {
  Container,
  Image,
  Row,
  Button,
  Form,
  InputGroup,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsUpload } from "react-icons/bs"; // Assuming you're using react-icons for the upload icon
import { useState } from "react";
import { Link } from "react-router-dom";

function ProfileID() {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center kontainer">
      <Image src="./images/tacbay.png" alt="logo" className="img-fluid " />

      <Row className="Row mt-4">
        <h5 className="text-center f-heading fw-bold">Create Your Profile</h5>
        <p className="text-center f-p2">Help us get to know you better. </p>
        <div>
          <Form.Group className="mb-3 d-flex justify-content-center">
            {image ? (
              <Image
                src="../images/tape.jpg"
                roundedCircle
                style={{ width: "150px", height: "150px" }}
              />
            ) : (
              <div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "100px",
                  height: "100px",
                  border: "1px solid #ced4da",
                }}
              >
                <BsUpload
                  size={20}
                  color="#495057"
                  class="position-absolute bottom-10 end-10"
                />
              </div>
            )}
            {/* <Form.Control
              type="file"
              onChange={() => handleImageChange}
              className="d-block"
            /> */}
          </Form.Group>
        </div>
        <div>
          <label htmlFor="text" className="Profile-label3">
            Firstname
          </label>
          <InputGroup size="lg">
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              className="Profile-input mb-2"
            />
          </InputGroup>
        </div>
        <div>
          <label htmlFor="text" className="Profile-label3">
            Lastname
          </label>
          <InputGroup size="lg">
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              className="Profile-input mb-2"
            />
          </InputGroup>
        </div>
        <div>
          <label htmlFor="text" className="Profile-label3">
            Email Address
          </label>
          <InputGroup size="lg" className="Profile-input">
            <Form.Control
              aria-label="Large"
              aria-describedby="inputGroup-sizing-sm"
              className="Profile-input mb-2n"
            />
          </InputGroup>
        </div>
        <div>
          <label htmlFor="text" className="Profile-label4">
            Gender
          </label>
          <select class="form-select" aria-label="Default select example">
            <option selected>Specify gender</option>
            <option value="1">Male</option>
            <option value="2">Female</option>
            <option value="3">Homosapien</option>
          </select>
        </div>
        <Link to="/Passwordpage" style={{ textDecoration: "none" }}>
          <div className="d-grid mt-4">
            <Button
              type="btn"
              className="text-center  btn-lg  border rounded-3 fw-medium fs-6"
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
  );
}
export default ProfileID;
