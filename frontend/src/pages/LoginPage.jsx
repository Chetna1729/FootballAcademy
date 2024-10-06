import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast';
import { UserContext } from '../App';

export const USER_API_END_POINT = "http://localhost:8000/api/v1/user/login";

const LoginPage = () => {

  const {state, dispatch} = useContext(UserContext);  
    const [input, setInput] = useState({
        email:"",
        password:""
    })

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post(USER_API_END_POINT, input, {
          headers:{
            "Content-Type":"application/json"
          },
          withCredentials: true,
        });
        
          dispatch({type:"USER", payload:res?.loggedInUser}) 
          toast.success("Logged in successfully");
          navigate("/");
        
      } catch (error) {
        console.log(error);
        toast.error("Invalid credentials"); 
      }
  }

  return (
    <div className="text-white h-[100vh] flex justify-center items-center bg-black">
      <form onSubmit={handleSubmit} className="bg-gray-800 p-8 rounded-lg shadow-lg w-[300px]">
        <h1 className="text-2xl font-bold mb-6">Login</h1>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Your Email"
            className="cursor-pointer w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
            name="email"
            value={input.email}
            onChange={changeEventHandler}
          />
        </div>
        <div className="mb-4">
          <input
            type="password"
            name="password"
            value={input.password}
            onChange={changeEventHandler}
            placeholder="Your Password"
            className="cursor-pointer w-full p-2 rounded bg-gray-700 text-white focus:outline-none"
          />
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <input type="checkbox" id="rememberMe" className="mr-2" />
            <label htmlFor="rememberMe" className="text-sm">Remember me</label>
          </div>
          <span className="text-sm text-[#78FF40] cursor-pointer hover:hover:text-[#99f572]">
            Forgot Password?
          </span>
        </div>
        <button className="w-full bg-[#78FF40] hover:bg-[#99f572] text-black p-2 rounded focus:outline-none">
          Login
        </button>
        <div className="mt-4 text-center">
          <span>
            New Here? <Link to="/register" className="text-[#78FF40] hover:text-[#99f572]">Create an Account</Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default LoginPage