import React, { useState } from 'react';

const Login = () => {
  const [input, setInput] = useState({
    fullName:"",
    email:"",
    password:""
  });

  const changeEventHandler = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold text-gray-900 text-center mb-6">Login</h2>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder="Enter your email"
              value={input.email}
              name="email"
              onChange={changeEventHandler}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="Enter your password"
              value={input.password}
              name="password"
              onChange={changeEventHandler}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
              href="/register"
            >
              Don't have an account? Register
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
