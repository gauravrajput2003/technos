import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import About from "./components/About";
import Home from "./components/Home";

const App = () => {
  return (
    
      <div className="min-h-screen bg-white dark:bg-gray-900 dark:text-white transition duration-300">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
  
  );
};

export default App;
