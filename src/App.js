import React from "react";
import Home from "./Home/Home";
import Skills from "./Home/Skills";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Education from "./Home/Education";
import Experience from "./Home/Experience";
import Contact from "./Home/Conatct";
import Navbar from "./Home/Navbar";
import About from "./Home/About";
import Services from "./Home/Services";
import Portfolio from "./Home/Portfolio";
import Footer from "./Home/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />}>
            <Route path="skills" element={<Skills />} />
            <Route path="education" element={<Education />} />
            <Route path="experience" element={<Experience />} />
          </Route>
          <Route path="/services" element={<Services />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
