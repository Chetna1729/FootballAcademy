// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutContent from "./components/Navbar/About/AboutContent";
import HistoryPage from "./components/Navbar/About/History"
import Contact from "./components/Navbar/Contact/Contact"
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </Router>
  );
};

export default App;
