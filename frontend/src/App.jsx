// eslint-disable-next-line no-unused-vars
import React, { createContext, useReducer } from "react";
import Navbar from "./Navbar/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutContent from "./Navbar/About/AboutContent";
import HistoryPage from "./Navbar/About/History"
import Contact from "./Navbar/Contact/Contact"
import HomePage from "./Home/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { Toaster } from "react-hot-toast";
import Profile from "./pages/Profile";
import { initialState, reducer } from "./reducer/UseReducer";
import Logout  from "./pages/Logout"
import Success from "./pages/Success"



export const UserContext = createContext();

const Routing = () => {
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
        <Route path="/profile" element={<Profile/>} />
        <Route path="/logout" element={<Logout/>} />
        <Route path="/success" element={<Success />} />
      </Routes>
      <Toaster position="bottom-right" reverseOrder={false} />
    </Router>
  )
}

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <UserContext.Provider value={{state, dispatch}}>
      <Routing />
    </UserContext.Provider>
  );
};

export default App;
