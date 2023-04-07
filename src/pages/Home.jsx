import React, { Fragment } from "react";
import Navbar from "../components/Navbar/Navbar";
import HomeSection from "../components/HomeSection/HeroSection";
import AboutUs from "../components/About-us/AboutUs";
import Courses from "../components/Courses/Courses";
import ChooseUs from "../components/Choose-us/ChooseUs";
import Features from "../components/Feature-section/Features";
import FreeCourses from "../components/FreeCourses/FreeCourses";
import Testimonials from "../components/Testimonial/Testimonials";
import Footer from "../components/Footer/Footer";

const Home = () => {
  return (
    <Fragment>
      <Navbar />
      <HomeSection />
      <AboutUs />
      <Courses />
      <ChooseUs />
      <Features />
      <FreeCourses />
      <Testimonials />
      <Footer />
    </Fragment>
  );
};

export default Home;
