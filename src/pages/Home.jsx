import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import HomeSection from "../components/HomeSection/HomeSection";
import AboutUs from "../components/AboutUs/AboutUs";
import Courses from "../components/Courses/Courses";
import ChooseUs from "../components/ChooseUs/ChooseUs";
// import FreeCourses from "../components/FreeCourses/FreeCourses";
import Comments from "../components/Comments/Comments";
import Footer from "../components/Footer/Footer";
import Payment from "./Payment";
const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <HomeSection />
      <AboutUs />
      <Courses />
      <ChooseUs />
      {/* <FreeCourses /> */}
      <Comments />
      <Footer />
      <Payment />
    </Fragment>
  );
};

export default Home;
