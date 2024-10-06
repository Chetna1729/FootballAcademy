// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import AboutContent from "./Navbar/About/AboutContent";
import HistoryPage from "./Navbar/About/History"
import Achievements from "./Navbar/About/Achievements";
import Mission from "./Navbar/About/Misson";
import Contact from "./Navbar/Contact/Contact"
import HomePage from "./Home/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
=======
import AboutContent from "./components/Navbar/About/AboutContent";
import HistoryPage from "./components/Navbar/About/History"
import Contact from "./components/Navbar/Contact/Contact"
import HomePage from "./components/Home/HomePage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
>>>>>>> ae28a60bef154df2fc63320dd540656f8f6add45
import { Toaster } from "react-hot-toast";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutContent />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/achievments" element={<Achievements />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </Router>
  );
};

export default App;
