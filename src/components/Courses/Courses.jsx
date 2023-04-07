import React from "react";
import { Container, Row, Col } from "reactstrap";
import Img1 from "../../assets/python.jpg";
import Img2 from "../../assets/design.jpg";
import Img3 from "../../assets/digital.jpg";
import "./courses.css";
import Card from "./Card";

const coursesData = [
  {
    id: "01",
    title: "Python Programming for Beginners",
    lesson: 20,
    students: 8.5,
    rating: 5.9,
    imgUrl: Img1,
  },

  {
    id: "02",
    title: "Professional Graphics Design, PhotoShop",
    lesson: 10,
    students: 9.0,
    rating: 3.0,
    imgUrl: Img2,
  },

  {
    id: "03",
    title: "Digital Marketing Course 2023",
    lesson: 15,
    students: 7.5,
    rating: 7.0,
    imgUrl: Img3,
  },
];

const Courses = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Courses</h2>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  consequatur libero quod voluptatibus ullam quia quas, vitae
                  voluptatem recusandae reprehenderit!
                </p> */}
              </div>

              <div className="w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {coursesData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <Card key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Courses;
