import React from "react";
import { Container } from "react-bootstrap";
import { FaCircleCheck } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import { FiEye } from "react-icons/fi";

const passwordInput = document.querySelector(".pass-field  input");
const eyeIcon = document.querySelector(".pass-field  FiEye");
eyeIcon.addEventListener("click", () => {
          passwordInput.type = passwordInput.type === "password" ? "text" : "password";
     });

const Newpass = () => {
  return (
    <Container className="body">
      <div className="wrapper ">
        <div className="pass-field">
          <input
            type="password"
            placeholder="Create password"
            // className="form-control"
            // style={{ width: "25%", height: "50%" }}
          />
          <span className="FiEye">
            <FiEye />
          </span>
        </div>
        <div className="content">
          <p>Password must contain</p>
          <ul className="requirement-list">
            <li>
              <FaCircleCheck />
              <span> Minimum 12 characters </span>
            </li>
            <li>
              <FaCircleCheck />
              <span> Use a mix of uppercase and lowercase letters </span>
            </li>
            <li>
              <FaCircleCheck />
              <span> Include at least one number </span>
            </li>
            <li>
              <FaCircleCheck />
              <span> Add at least one special character (!@#$%) </span>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
};
export default Newpass;
