// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutContent from "./Navbar/About/AboutContent";
import HistoryPage from "./Navbar/About/History"
import Contact from "./Navbar/Contact/Contact"
import HomePage from "./Home/HomePage";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/history" element={<HistoryPage />} /> {/* Ensure path is correct */}
        <Route path="/contact" element={<Contact />} /> {/* Ensure path is correct */}
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
};

export default App;
