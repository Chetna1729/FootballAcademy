// src/pages/Logout.jsx
import React, { useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import toast from 'react-hot-toast';

export const USER_API_END_POINT = "http://localhost:8000/api/v1/user/logout";

const Logout = () => {
  const { state, dispatch } = useContext(UserContext);  
  const navigate = useNavigate();  

  const handleLogout = () => {
    axios
      .post(USER_API_END_POINT, {}, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
        withCredentials: true, 
      })
      .then((response) => {
        if (response.data.success) {
          dispatch({type:"USER", payload:false}) 
          
          // Clear user data from localStorage
          localStorage.removeItem("token");
          localStorage.removeItem("user");

          // Show success toast notification
          toast.success("Logged out successfully");

          navigate("/login");
        } else {
          toast.error("Logout failed. Please try again.");
        }
      })
      .catch((error) => {
        console.error("Logout Error: ", error);
        toast.error("An error occurred during logout.");
      });
  };

  handleLogout();

  return null; 
};

export default Logout; 
