/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import img1 from "../../../assets/images/testimonial/1.jpg";
import img2 from "../../../assets/images/testimonial/2.jpg";
import img3 from "../../../assets/images/testimonial/3.jpg";

const TestimonialComponent = () => {
  return (
    <div>
      {/* <div className="spacer">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h1 className="title font-bold">Testimonial</h1>
              <h6 className="subtitle">
                Here you can check Demos we created based on WrapKit. Its quite
                easy to Create your own dream website &amp; dashboard in
                No-time.
              </h6>
            </Col>
          </Row>
        </Container>
      </div> */}
      <div className="testimonial3 spacer bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col md="7" className="text-center">
              <h2 className="title">Check what our Customers are Saying</h2>
              <h6 className="subtitle">
                You can relay on our amazing features list and also our customer
                services will be great experience for you without doubt and in
                no-time
              </h6>
            </Col>
          </Row>
          <Row className="testi3 m-t-40 justify-content-center">
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “Local network detection doesn't work correctly. Can't transfer large files to Galaxy watch and Google cast doesn't work. When I restart the phone I haven't network connection when always-on VPN is on, I must disable and re-enable this feature manually.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img1} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Michelle Anderson</h6>
                      <div className="font-10">
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “It's all working well again after a blip. Clearer instructions would be welcome. Eg, how/why to split tunnel, the need to locate local network to cast from Android etc. It all takes a while to set up and when the app gets reset with a reinstall (after a rare crash) it's a learning curve/frustration to remember how to set it up.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img2} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Carolina mesty</h6>
                      <div className="font-10">
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col lg="4" md="6">
              <Card className="card-shadow">
                <CardBody>
                  <h6 className="font-light m-b-30">
                    “This is VPN from the angle of privacy not from the angle of free web browsing. I cannot connect to some remote locations that I needed, which made me cancel. From the privacy/security perspective it's actually good.”
                  </h6>
                  <div className="d-flex no-block align-items-center">
                    <span className="thumb-img">
                      <Image src={img3} alt="wrapkit" className="circle" />
                    </span>
                    <div className="m-l-20">
                      <h6 className="m-b-0 customer">Lily adam</h6>
                      <div className="font-10">
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-danger">
                          <i className="fa fa-star"></i>
                        </a>
                        <a href="" className="text-muted">
                          <i className="fa fa-star"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default TestimonialComponent;
