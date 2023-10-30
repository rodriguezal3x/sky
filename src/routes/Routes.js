import React from "react";
import { Routes, Route } from "react-router-dom";
import About from "../components/pages/About";
import Contact from "../components/pages/Contact";
import Packages from "../pages/Pack";
import Home from "../components/pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/packages" element={<Packages />} />
    </Routes>
  );
};

export default AppRoutes;
