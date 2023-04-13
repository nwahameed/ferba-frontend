import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Courses from "./pages/Courses";
import Kids from "./pages/Kids";
import Contact from "./pages/Contact";
import Payment from "./pages/Payment/Payment";
import Login from "./pages/login/Login";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" element={Home} exact>
            <Home />
          </Route>
          <Route path="/about" element={About} exact>
            <About />
          </Route>
          <Route path="/courses" element={Courses} exact>
            <Courses />
          </Route>
          <Route path="/kids" element={Kids} exact>
            <Kids />
          </Route>
          <Route path="/contact" element={Contact} exact>
            <Contact />
          </Route>
          <Route path="/payment" element={Payment} exact>
            <Payment />
          </Route>
          <Route path="/login" element={Login} exact>
            <Login />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
