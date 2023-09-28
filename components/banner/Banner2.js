import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import bannerimg from "../../assets/images/landingpage/ilustration.png";

const Banner2 = () => {
  return (
    <div className="static-slider-head banner2">
      <Container>
        <Row className="">
          <Col lg="6" md="6" className="align-self-center">
            <h1 className="title">
              Monovpn Security Solution Group
            </h1>
            <h4 className="subtitle font-light">
            Provide a network for all your needs with ease 
              <br /> Safe to Use & Trustable
            </h4>
            <Link href="/#grab">
            <a className="btn btn-danger m-r-20 btn-md m-t-30 ">
              Download
            </a>
            </Link>
            <Link href="/#pricing">
              <a className="btn btn-md m-t-30  btn-outline-light ">
                Buy Now
              </a>
            </Link>
          </Col>
          <Col lg="6" md="6">
            <Image src={bannerimg} alt="hero banner" />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Banner2;
