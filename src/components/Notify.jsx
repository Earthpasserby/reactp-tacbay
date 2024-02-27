import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
const Notify = () => {
  return (
    <Container className="mt-5">
      <h4>Settings</h4>
      <p>Manage your team members and their account permissions here.</p>
      <Row className="mt-4 p-3">
        <Col sm={6} md={4}>
          <a href="/">
            <p> Personal info</p>
          </a>
          <a href="/">
            <p> Change Password</p>
          </a>
          <a href="/">
            <p>Notifications</p>
          </a>
          <a href="/">
            <p> Appearance</p>
          </a>
          <a href="/">
            <p>App Language</p>
          </a>
          <a href="/">
            <p>Delete Account</p>
          </a>
        </Col>
        <Col sm={6} md={8}>
          <h6>Notifications</h6>
          <hr />
          <div className="card border border-3">
            <div className="card-header d-flex justify-content-between">
              <h6>Notifications</h6>
              <h6>Mobile</h6>
            </div>
            <div className="card-body ">
              <div className="d-flex justify-content-between">
                <div>
                  <h6>Account Notifications</h6>
                  <p>Receive notifications about account-related updates</p>
                </div>
                <div>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <h6>Support Notifications</h6>
                  <p>
                    Receive notifications about support-related issues or
                    updates
                  </p>
                </div>
                <div>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <h6>Security Notifications</h6>
                  <p>Receive notifications about security-related updates</p>
                </div>
                <div>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <h6>Upgrade Notifications</h6>
                  <p>
                    Receive notifications about upgrades to your account or
                    subscription
                  </p>
                </div>
                <div>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <h6>Feedback Notifications</h6>
                  <p>Receive notifications about user feedback or surveys</p>
                </div>
                <div>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div>
                  <h6>Announcement Notifications</h6>
                  <p>
                    Receive notifications about company announcements or updates
                  </p>
                </div>
                <div>
                  <label class="switch">
                    <input type="checkbox" />
                    <span class="slider round"></span>
                  </label>
                </div>
              </div>
            </div>
          </div>
          <hr />
        </Col>
      </Row>
    </Container>
  );
};
export default Notify;
