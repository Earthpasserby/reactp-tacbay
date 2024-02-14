import React from "react";
import { Container, Image, Row, Button, Form } from "react-bootstrap";
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
      <Image
        src="./images/tacbay.png"
        alt="logo"
        className="mx-auto d-block img"
      />
      <Row className="row mx-auto d-block mt-4">
        <h5 className="text-center f-heading">Create Your Profile</h5>
        <p className="text-center">Help us get to know you better. </p>
        <div>
          <Form.Group className="mb-3 text-center">
            {image ? (
              <Image
                src="../images/"
                roundedCircle
                style={{ width: "150px", height: "150px" }}
              />
            ) : (
              <div
                className="d-flex align-items-center justify-content-center rounded-circle"
                style={{
                  width: "150px",
                  height: "150px",
                  border: "1px solid #ced4da",
                }}
              >
                <BsUpload size={20} color="#495057" />
              </div>
            )}
            <Form.Control
              type="file"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </Form.Group>
        </div>
      </Row>
    </Container>
  );
}
export default ProfileID;
