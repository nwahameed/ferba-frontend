import React, { Fragment } from "react";
import HomeSection from "../components/HomeSection/HomeSection";
import AboutUs from "../components/AboutUs/AboutUs";
import Courses from "../components/Courses/Courses";
import ChooseUs from "../components/ChooseUs/ChooseUs";
// import FreeCourses from "../components/FreeCourses/FreeCourses";
import Comments from "../components/Comments/Comments";
const Home = () => {
  return (
    <Fragment>
      <HomeSection />
      <AboutUs />
      <Courses />
      <ChooseUs />
      {/* <FreeCourses /> */}
      <Comments />
    </Fragment>
  );
};

export default Home;
