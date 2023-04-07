import React from "react";
import "./aboutus.css";
import { Container, Row, Col } from "reactstrap";
import aboutImg from "../../assets/AboutUs.jpg";
import CountUp from "react-countup";

const AboutUs = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Excepturi cupiditate animi deserunt libero nesciunt corporis
                explicabo nobis ex quo molestiae!
              </p>

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={176} duration={2} />
                    </span>

                    <p className="counter__title">Users</p>
                  </div>
                </div>

                <div className="single__counter">
                  <span className="counter">
                    <CountUp start={0} end={70} duration={2} />
                  </span>

                  <p className="counter__title">Courses</p>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutUs;
