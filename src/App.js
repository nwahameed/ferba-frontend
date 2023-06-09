import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Courses from "./pages/Courses";
// import Kids from "./pages/Kids";
import Contact from "./pages/Contact";
import Login from "./pages/login/Login";
import Cart from "./pages/Cart/Cart";
import { CartProvider } from "react-use-cart";
const App = () => {
  return (
    <>
      <CartProvider>
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
            {/* <Route path="/kids" element={Kids} exact>
            <Kids />
          </Route> */}
            <Route path="/contact" element={Contact} exact>
              <Contact />
            </Route>
            <Route path="/cart" element={Cart} exact>
              <Cart />
            </Route>
            <Route path="/login" element={Login} exact>
              <Login />
            </Route>
          </Switch>
        </Router>
        <Footer />
      </CartProvider>
    </>
  );
};

export default App;
