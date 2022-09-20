/**
 * Application component
 *
 * To contain application wide settings, routes, state, etc.
 */

import React from "react";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Portfolio from "./Components/Portfolio";
import "./styles.css";

import Home from "./Components/Home";
import About from "./Components/About";

const COLORS = {
  primary: "blue",
  secondary: "green",
};

const SITE_PROPS = {
  name: "Sara",
  gitHub: "saragibby",
  instagram: "gibbette03",
  linkedIn: "saragibby",
  twitter: "saragibby",
};

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home />
      <About />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default App;
