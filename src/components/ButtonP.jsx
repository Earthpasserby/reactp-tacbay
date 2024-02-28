import React, { useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Button,
  Container,
  Image,
  Navbar,
  Nav,
  InputGroup,
  Row,
  Col,
  Form,
} from "react-bootstrap";
import { IoLocationOutline } from "react-icons/io5";
import { BsBrightnessHigh } from "react-icons/bs";
import { Link } from "react-router-dom";
import { GoArrowRight } from "react-icons/go";
import { GoArrowLeft } from "react-icons/go";

const ButtonP = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const containerRef = useRef(null);

  const scrollToNext = () => {
    containerRef.current.scrollLeft += containerRef.current.offsetWidth;
  };

  const scrollToPrevious = () => {
    containerRef.current.scrollLeft -= containerRef.current.offsetWidth;
  };
  return (
    <>
      <Container fluid className="" style={{ marginTop: "90px" }}>
        <Row>
          <Col>
            {/* <span onClick={scrollToPrevious}>
              <GoArrowLeft />
            </span> */}
          </Col>
          <Col
            xs={10}
            ref={containerRef}
            style={{ overflowX: "auto", whiteSpace: "nowrap" }}
          >
            <div className="d-flex">
              <Link spy={true} smooth={true} duration={500}>
                <Button
                  className=" me-2 card-p border-dark border-1"
                  style={{
                    width: "100px",
                    height: "36px",
                    background: "#FFFFFF",
                    color: "#000",
                  }}
                >
                  Eatry
                </Button>
              </Link>

              <Link spy={true} smooth={true} duration={500}>
                <Button
                  className=" me-2 card-p border-dark border-1"
                  style={{
                    width: "100px",
                    height: "36px",
                    background: "#FFFFFF",
                    color: "#000",
                  }}
                >
                  3D Design
                </Button>
              </Link>
              <Link spy={true} smooth={true} duration={500}>
                <Button
                  className=" me-2 card-p border-dark border-1"
                  style={{
                    width: "100px",
                    height: "36px",
                    background: "#FFFFFF",
                    color: "#000",
                  }}
                >
                  Tropical
                </Button>
              </Link>
              <Link spy={true} smooth={true} duration={500}>
                <Button
                  className=" me-2 card-p border-dark border-1"
                  style={{
                    width: "120px",
                    height: "36px",
                    background: "#FFFFFF",
                    color: "#000",
                  }}
                >
                  Auto Repairs
                </Button>
              </Link>
              <Link spy={true} smooth={true} duration={500}>
                <Button
                  className=" me-2 card-p border-dark border-1"
                  style={{
                    width: "100px",
                    height: "36px",
                    background: "#FFFFFF",
                    color: "#000",
                  }}
                >
                  Barbing
                </Button>
              </Link>
              <Link spy={true} smooth={true} duration={500}>
                <Button
                  className=" me-2 card-p border-dark border-1"
                  style={{
                    width: "220px",
                    height: "36px",
                    background: "#FFFFFF",
                    color: "#000",
                  }}
                >
                  Blacksmiths (Automobiles)
                </Button>
              </Link>
              <Link spy={true} smooth={true} duration={500}>
                <Button
                  className=" me-2 card-p border-dark border-1"
                  style={{
                    width: "100px",
                    height: "36px",
                    background: "#FFFFFF",
                    color: "#000",
                  }}
                >
                  Bricklaying
                </Button>
              </Link>
              <Link spy={true} smooth={true} duration={500}>
                <Button
                  className=" me-2 card-p border-dark border-1"
                  style={{
                    width: "100px",
                    height: "36px",
                    background: "#FFFFFF",
                    color: "#000",
                  }}
                >
                  Carpentry
                </Button>
              </Link>
              <Link spy={true} smooth={true} duration={500}>
                <Button
                  className=" me-2 card-p border-dark border-1"
                  style={{
                    width: "200px",
                    height: "36px",
                    background: "#FFFFFF",
                    color: "#000",
                  }}
                >
                  Car/Home Refrigeration
                </Button>
              </Link>
              <Link spy={true} smooth={true} duration={500}>
                <Button
                  className=" me-2 card-p border-dark border-1"
                  style={{
                    width: "70px",
                    height: "36px",
                    background: "#FFFFFF",
                    color: "#000",
                  }}
                >
                  Eatry
                </Button>
              </Link>
            </div>
            {/* Add more ScrollSpy links as needed */}
          </Col>
          <Col>
            <span onClick={scrollToNext}>
              <GoArrowRight />
            </span>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ButtonP;
