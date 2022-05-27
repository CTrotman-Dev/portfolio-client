import React, { Component } from 'react';
import { Routes, Route } from "react-router-dom";


import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Clients from "./pages/Clients";
import Education from "./pages/Education";

class App extends Component {


  render() {
    return (
      <div className="App">
        {/* <ParallaxProvider> */}
          <Header />
          <div className="mainContent">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/education" element={<Education />} />
            </Routes>
          </div>
          <Footer />
        {/* </ParallaxProvider> */}
      </div>
    );
  }
}

export default App;