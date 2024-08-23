// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutContent from "./components/Navbar/About/AboutContent";
import HistoryPage from "./components/Navbar/About/History"
import Contact from "./components/Navbar/Contact/Contact"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/history" element={<HistoryPage />} /> {/* Ensure path is correct */}
        <Route path="/contact" element={<Contact />} /> {/* Ensure path is correct */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
