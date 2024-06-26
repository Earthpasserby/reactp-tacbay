import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Card, Button, Image } from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { RiStarSFill } from "react-icons/ri";
import { VscArrowSmallRight } from "react-icons/vsc";
import { LiaInstagram } from "react-icons/lia";
import { CiFacebook } from "react-icons/ci";
import { TfiTwitter } from "react-icons/tfi";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Category = () => {
  return (
    <>
      <Container className="" style={{ marginTop: "30px" }}>
        <h3>Featured</h3>
        <Row className="mt-4">
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img
                src="./images/chairs.png"
                className="img-fluid card-img"
              />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline />
                Kano, Kano
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                Chic Styles Hair Salon
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.8 | 104 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img
                src="./images/carp.png"
                className="img-fluid card-img"
              />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline />
                Ibadan, Oyo
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                WonderCraft Wonders
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.5 | 85 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img
                src="./images/shoemaker.png"
                className="img-fluid card-img"
              />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline /> Akure, Ondo
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                CreativeHands Shoe Boutique
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.8 | 110 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img
                src="./images/welder.png"
                className="img-fluid card-img"
              />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline />
                PortHarcort, Rivers
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                IronCraft Welding Solutions
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.8 | 104 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img
                src="./images/hairstyle.png"
                className="img-fluid card-img"
              />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline />
                Ilorin, Kwara
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                MasterCuts Hair Studio
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.6| 75 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img
                src="./images/glass.png"
                className="img-fluid card-img"
              />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline /> Benin City, Edo
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                Chic Styles Hair Salon
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.9 | 90 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img src="./images/wrk.png" className="img-fluid card-img" />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline />
                PortHarcort, Rivers
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                SolidCraft BrickLaying
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.8 | 104 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img
                src="./images/brick.png"
                className="img-fluid card-img"
              />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline />
                Ilorin, Kwara
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                SolidBuild Construction
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.6| 75 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img
                src="./images/corn.png"
                className="img-fluid card-img"
              />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline /> Benin City, Edo
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                Divine Delights Catering
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.9 | 90 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img src="./images/Ac.png" className="img-fluid card-img" />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline />
                PortHarcort, Rivers
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                CoolBreeze AC Services
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.8 | 104 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img
                src="./images/weld.png"
                className="img-fluid card-img"
              />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline />
                Ilorin, Kwara
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                IronCraft Welding Solutions
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.6| 75 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
          <Col sm={4}>
            <Card
              className="border border-0"
              style={{ background: "transparent" }}
            >
              <Card.Img
                src="./images/food.png"
                className="img-fluid card-img"
              />
              <span
                className="text-primary"
                style={{ width: "205px", height: "28px" }}
              >
                <IoLocationOutline /> Benin City, Edo
              </span>
              <Card.Title
                style={{ width: "378px", height: "28px" }}
                className="card-title"
              >
                Divine Cusiene Catering
              </Card.Title>
              <Card.Text>
                <p
                  style={{ width: "378px", height: "38px" }}
                  className="card-p1"
                >
                  Where style meets precision. Professional hairstyling and
                  beauty services for all.
                </p>
                <div className="d-flex">
                  <p
                    style={{ width: "109px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Beauty Services
                  </p>
                  <p
                    style={{ width: "83px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Hair Styling
                  </p>
                  <p
                    style={{ width: "108px", height: "20px" }}
                    className="me-2 card-p"
                  >
                    Barber Services
                  </p>
                </div>
                <p
                  style={{ width: "150px", height: "20px" }}
                  className="me-2 card-p"
                >
                  Beauty Treatments
                </p>
                <p>
                  {" "}
                  <RiStarSFill /> 4.9 | 90 Reviews
                </p>
              </Card.Text>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="mt-5 tron">
              <div className="ton p-5">
                <h4>Become a service provider on Tacbay</h4>
                <p>
                  Expand your reach as a service provider. Connect with users
                  looking for your skills.
                </p>
                <div className=" ">
                  <Button
                    type="btn"
                    variant="dark"
                    className="text-center btn-dark text-white  border border-0 rounded-2 "
                  >
                    <span className="mx-2 fw-bold fst-normal">Get Started</span>
                    <VscArrowSmallRight />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col xs={12}>
            <div className="mt-5 tron2">
              <div className="ton2 p-5">
                <h4>Get Skilled Assistance</h4>
                <p>
                  Need specific skills for a project? Our artisans can help.
                  Fill out the form to connect with experts.
                </p>
                <div className="mt-5 ">
                  <Button
                    type="btn"
                    variant="dark"
                    className="text-center btn-dark text-white  border border-0 rounded-2 "
                  >
                    <span className="mx-2 fw-bold fst-normal">Get Started</span>
                    <VscArrowSmallRight />
                  </Button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <footer className="text-light mt-5">
        <Container className="mb-1">
          <Image
            src="./images/tacbay.png"
            alt="logo"
            className="mx-auto d-block img"
          />
          <Row className="mt-4 justify-content-center">
            <Col xs={12} md={2} className="mb-3">
              <a href="/">
                <p>About</p>
              </a>
            </Col>
            <Col xs={12} md={2} className="mb-2">
              <a href="/">
                <p>Contact Us</p>
              </a>
            </Col>
            <Col xs={12} md={2} className="mb-2">
              <a href="/">
                <p>FAQs</p>
              </a>
            </Col>
            <Col xs={12} md={2} className="mb-2">
              <a href="/">
                <p>Terms & Conditions</p>
              </a>
            </Col>
            <Col xs={12} md={2} className="mb-2">
              <a href="/">
                <p>Privacy Policy</p>
              </a>
            </Col>
          </Row>
        </Container>
        <Container>
          <Row>
            <h3 className="text-dark text-center">Stay in touch</h3>
            <div className="d-flex justify-content-center">
              <a href="/" className="me-3 fs-3">
                <LiaInstagram />
              </a>
              <a href="/" className="me-3 fs-3">
                <CiFacebook />
              </a>
              <a href="/" className="me-3 fs-3">
                <TfiTwitter />
              </a>
              <a href="/" className="me-3 fs-3">
                {" "}
                <TiSocialLinkedinCircular />
              </a>
            </div>
            <div className="text-center mt-3">
              <a href="/">
                <Image
                  src="./images/google app.png"
                  alt="google playstore logo"
                />
              </a>
              <a href="/">
                <Image
                  src="./images/apple store.png"
                  alt="google playstore logo"
                />
              </a>
            </div>

            <p className="text-center text-dark mt-3 copy">
              &copy; {new Date().getFullYear()} Tacbay.
            </p>
          </Row>
        </Container>
      </footer>
    </>
  );
};
export default Category;
