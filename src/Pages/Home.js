import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate('/login');
  };

  return (
    <div className="home">

      <section className="hero relative text-center py-6 bg-gray-800 text-white">
        <button
          onClick={handleLogout}
          className="absolute top-2 right-4 text-white bg-red-600 px-3 py-1 rounded-full hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-400 transition transform hover:scale-95 duration-300 ease-in-out shadow-md"
        >
          Logout
        </button>
        <h1 className="text-3xl font-bold mb-2">Catering Service Manager</h1>
        <p className="text-md mb-4">Efficiently manage your daig inventory, allocation, and status tracking.</p>
      </section>

      <div className="card-container grid grid-cols-1 sm:grid-cols-2 gap-4 p-4">
        <div className="card p-4 bg-white text-gray-800 shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Add Daig</h2>
          <p>Keep your inventory up to date with new daigs.</p>
          <Link to="/add-daig" className="text-indigo-600 hover:underline text-sm">Add Now</Link>
        </div>
        <div className="card p-4 bg-white text-gray-800 shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Manage Daig Status</h2>
          <p>Track the status of allocated and available daigs.</p>
          <Link to="/daig-status" className="text-indigo-600 hover:underline text-sm">Manage Status</Link>
        </div>
        <div className="card p-4 bg-white text-gray-800 shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Allocate Daig</h2>
          <p>Assign daigs for upcoming events or orders.</p>
          <Link to="/allocate-daig" className="text-indigo-600 hover:underline text-sm">Allocate Now</Link>
        </div>
        <div className="card p-4 bg-white text-gray-800 shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Daig Item</h2>
          <p>Delete daigs items or orders.</p>
          <Link to="/item-daig" className="text-indigo-600 hover:underline text-sm">Update Now</Link>
        </div>
        <div className="card p-4 bg-white text-gray-800 shadow-md rounded-md">
          <h2 className="text-xl font-semibold">Update Daig</h2>
          <p>Update Daig as per your needs.</p>
          <Link to="/update-daig" className="text-indigo-600 hover:underline text-sm">Update Now</Link>
        </div>
      </div>

      <footer className="footer bg-gray-900 text-white text-center py-2">
        <p className="text-sm">&copy; 2024 Catering Service Manager</p>
      </footer>
    </div>
  );
}

export default Home;
