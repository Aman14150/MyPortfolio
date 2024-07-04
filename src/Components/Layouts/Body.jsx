import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Projects from "../Pages/Projects";
import Skills from "../Pages/Skills";
import Resume from "../Pages/Resume";
import Contacts from "../Pages/Contacts";

function Body() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/resume" element={<Resume />} />
      <Route path="/contacts" element={<Contacts />} />
    </Routes>
  );
}

export default Body;
