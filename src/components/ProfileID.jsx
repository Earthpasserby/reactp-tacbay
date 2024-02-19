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
    <Container>
      
      <Row className="row mx-auto d-block mt-4">
        <h5 className="text-center f-heading">Create Your Profile</h5>
        <p className="text-center">Help us get to know you better. </p>
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
                  size={50}
                  color="#495057"
                  class="position-absolute bottom-10 end-10"
                />
              </div>
            )}
            <Form.Control
              type="file"
              onChange={() => handleImageChange}
              className="d-block"
            />
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
        <div className="d-grid mt-4">
          <Button type="btn" className="text-center  btn-lg  border rounded-4 ">
            Continue
          </Button>
        </div>
      </Row>
    </Container>
  );
}
export default ProfileID;
