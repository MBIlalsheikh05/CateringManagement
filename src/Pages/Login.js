// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import { ToastContainer } from 'react-toastify';
// import { handleError, handleSuccess } from '../utils';

// function Login() {
//   const [loginInfo, setLoginInfo] = useState({
//     email: '',
//     password: ''
//   });

//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setLoginInfo((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     const { email, password } = loginInfo;

//     if (!email || !password) {
//       return handleError('Email and password are required');
//     }

//     try {
//       // const url = 'http://localhost:3002/auth/login';
//       const url = `${window.location.origin}/auth/login`

    
//       const response = await fetch(url, {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(loginInfo)
//       });
//       const result = await response.json();
//       const { success, message, jwtToken, name, error } = result;

//       if (success) {
//         handleSuccess(message);
//         localStorage.setItem('token', jwtToken);
//         localStorage.setItem('loggedInUser', name);
//         setTimeout(() => {
//           navigate('/home');
//         }, 1000);
//       } else {
//         handleSuccess(message);
//         localStorage.setItem('token', jwtToken);
//         localStorage.setItem('loggedInUser', name);
//         setTimeout(() => {
//           navigate('/home');
//         }, 1000);
//         // handleError(error?.details[0].message || message);
//       }
//     } catch (err) {
    
//         setTimeout(() => {
//           navigate('/home');
//         }, 1000);
//       // handleError(err);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
//       <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
//         <h1 className="text-4xl font-extrabold text-center text-indigo-400 animate-bounce">Welcome Back</h1>
//         <p className="text-center text-gray-400 mb-6 animate-fade-in">Login to your account</p>
//         <form onSubmit={handleLogin} className="space-y-6">
//           <div className="relative">
//             <label htmlFor="email" className="text-gray-300 font-semibold">Email</label>
//             <input
//               onChange={handleChange}
//               type="email"
//               name="email"
//               id="email"
//               placeholder="Enter your email..."
//               value={loginInfo.email}
//               className="w-full px-4 py-3 mt-2 text-gray-200 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-gray-700"
//               required
//             />
//           </div>
//           <div className="relative">
//             <label htmlFor="password" className="text-gray-300 font-semibold">Password</label>
//             <input
//               onChange={handleChange}
//               type="password"
//               name="password"
//               id="password"
//               placeholder="Enter your password..."
//               value={loginInfo.password}
//               className="w-full px-4 py-3 mt-2 text-gray-200 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-gray-700"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-3 mt-4 font-bold text-white bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-lg shadow-md hover:shadow-xl transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//           >
//             Login
//           </button>
//           <p className="text-center text-gray-400 mt-4">
//             Don’t have an account?{' '}
//             <Link to="/signup" className="text-indigo-500 hover:underline">Sign Up</Link>
//           </p>
//         </form>
//       </div>
//       <ToastContainer />
//     </div>
//   );
// }

// export default Login;






import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginInfo((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = (e) => {
    e.preventDefault();

    // Here, you can skip the authentication checks and directly redirect to the home page.
    navigate('/home');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <div className="w-full max-w-md p-8 space-y-6 bg-gray-900 rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:shadow-2xl">
        <h1 className="text-4xl font-extrabold text-center text-indigo-400 animate-bounce">Welcome Back</h1>
        <p className="text-center text-gray-400 mb-6 animate-fade-in">Login to your account</p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="text-gray-300 font-semibold">Email</label>
            <input
              onChange={handleChange}
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email..."
              value={loginInfo.email}
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
              value={loginInfo.password}
              className="w-full px-4 py-3 mt-2 text-gray-200 bg-gray-800 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-gray-700"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 font-bold text-white bg-gradient-to-r from-indigo-700 to-indigo-500 rounded-lg shadow-md hover:shadow-xl transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            Login
          </button>
          <p className="text-center text-gray-400 mt-4">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-indigo-500 hover:underline">Sign Up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
