import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-hot-toast';

export const USER_API_END_POINT = "http://localhost:8000/api/v1/user/register";

const RegisterPage = () => {
    const [input, setInput] = useState({
        username: "",
        email: "",
        password: ""
    });

    const notify = () => toast('Invalid')

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const changeEventHandler = (e) => {
        setInput({ ...input, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await axios.post(USER_API_END_POINT, input, {
                headers: {
                    "Content-Type": "application/json"
                },
                withCredentials: true,
            });
            if (res.data.success) {
                toast.success('User created successfully');
                navigate("/login");
            } else {
                console.log("Registration failed:", res.data.message);
            }
        } catch (error) {
            console.error("Error during registration:", error);
            toast.error("Error occured");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="text-white h-[95vh] flex justify-center items-center bg-black">
            <div className="bg-gray-800 p-8 rounded-lg shadow-lg w-[300px]">
                <h2 className="text-2xl font-bold mb-6">Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block mb-2">Name</label>
                        <input
                            type="text"
                            name="username"
                            value={input.username}
                            onChange={changeEventHandler}
                            className="bg-gray-700 w-full p-2 rounded text-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={input.email}
                            onChange={changeEventHandler}
                            className="bg-gray-700 cursor-pointer w-full p-2 rounded text-white"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block mb-2">Password</label>
                        <input
                            type="password"
                            name="password"
                            value={input.password}
                            onChange={changeEventHandler}
                            className="bg-gray-700 cursor-pointer w-full p-2 rounded text-white"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full mt-4 p-2 bg-[#78FF40] rounded text-black font-bold hover:bg-[#99f572]"
                        disabled={loading}
                        // onClick={notify}
                    >
                        {loading ? 'Registering...' : 'Register'}
                    </button>
                </form>
                <div className="mt-4 text-center">
                    Already have an account?{" "}
                    <a href="/login" className="text-[#78FF40] hover:text-[#99f572]">
                        Login
                    </a>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;