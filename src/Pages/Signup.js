import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { handleError, handleSuccess } from '../utils';

function Signup() {
  const [signupInfo, setSignupInfo] = useState({
    name: '',
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignupInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    const { name, email, password } = signupInfo;
    if (!name || !email || !password) {
      return handleError('Name, email, and password are required');
    }

    try {
      const url = 'http://localhost:3002/auth/signup';
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signupInfo)
      });
      const result = await response.json();
      const { success, message, error } = result;
      if (success) {
        handleSuccess(message);
        setTimeout(() => {
          navigate('/login');
        }, 1000);
      } else {
        handleError(error?.details[0].message || message);
      }
    } catch (err) {
      handleError(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-indigo-400 animate-bounce">Create Account</h1>
        <p className="text-center text-gray-400 mb-6 animate-fade-in">Sign up for a new account</p>
        <form onSubmit={handleSignup} className="space-y-6">
          <div className="relative">
            <label htmlFor="name" className="text-gray-300 font-semibold">Name</label>
            <input
              onChange={handleChange}
              type="text"
              name="name"
              id="name"
              autoFocus
              placeholder="Enter your name..."
              value={signupInfo.name}
              className="w-full px-4 py-3 mt-2 text-gray-200 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-gray-700"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className="text-gray-300 font-semibold">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              value={signupInfo.email}
              className="w-full px-4 py-3 mt-2 text-gray-200 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-gray-700"
              required
            />
          </div>
          <div className="relative">
            <label htmlFor="password" className="text-gray-300 font-semibold">Password</label>
            <input
              onChange={handleChange}
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password..."
              value={signupInfo.password}
              className="w-full px-4 py-3 mt-2 text-gray-200 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 font-bold text-white bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-lg shadow-md hover:shadow-xl transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Signup
          </button>
          <p className="text-center text-gray-400 mt-4">
            Already have an account?{' '}
            <Link to="/login" className="text-indigo-500 hover:underline">Login</Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Signup;
