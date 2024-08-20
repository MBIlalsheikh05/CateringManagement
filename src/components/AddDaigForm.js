import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { DaigContext } from '../context/DaigContext';

const AddDaigForm = () => {
  const { addDaig } = useContext(DaigContext);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addDaig({ name, quantity });
    setName('');
    setQuantity('');
  };

  const handleBackClick = () => {
    navigate('/home'); // Navigate back to the home page
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-[#16222a] text-teal-400 p-4 shadow-lg flex justify-between items-center">
        <div className="text-2xl font-bold"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center p-6">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-md w-full">
          <h3 className="text-2xl font-semibold text-teal-400 mb-6">Add New Daig</h3>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Daig Name"
              className="w-full p-3 border border-teal-500 rounded-md bg-gray-700 text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <input
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="Quantity"
              className="w-full p-3 border border-teal-500 rounded-md bg-gray-700 text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            >
              Add Daig
            </button>
          </form>

          {/* Back Button */}
         
        </div>
        <button
            onClick={handleBackClick}
            className="mt-6 bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
          >
            Back to Home
          </button>
      </main>
      
      {/* Footer */}
      <footer className="bg-[#16222a] text-gray-200 p-4 text-center">
        <p>&copy; Catering Manager</p>
      </footer>
    </div>
  );
};

export default AddDaigForm;
