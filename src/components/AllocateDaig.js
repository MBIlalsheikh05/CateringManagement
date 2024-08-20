import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { DaigContext } from '../context/DaigContext';

const AllocateDaig = () => {
  const { daigs, allocateDaig } = useContext(DaigContext);
  const [selectedDaig, setSelectedDaig] = useState('');
  const [allocation, setAllocation] = useState('');
  const navigate = useNavigate();

  const handleAllocate = () => {
    if (selectedDaig && allocation) {
      allocateDaig(selectedDaig, allocation);
      setAllocation('');
    } else {
      alert('Please select a Daig and enter allocation details.');
    }
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
          <h2 className="text-3xl font-semibold text-teal-400 mb-6">Allocate Daig Manager</h2>

          <div className="mb-4">
            <label htmlFor="daig-select" className="block text-gray-200 text-sm font-medium mb-2">Select Daig</label>
            <select
              id="daig-select"
              className="w-full p-3 border border-teal-500 rounded-md bg-gray-700 text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              onChange={(e) => setSelectedDaig(e.target.value)}
              value={selectedDaig}
            >
              <option value="">Select Daig</option>
              {daigs.length > 0 ? (
                daigs.map((daig, index) => (
                  <option key={index} value={daig.name}>
                    {daig.name}
                  </option>
                ))
              ) : (
                <option value="" disabled>No Daigs Available</option>
              )}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="allocation-input" className="block text-gray-200 text-sm font-medium mb-2">Enter Allocation Details</label>
            <input
              id="allocation-input"
              type="text"
              className="w-full p-3 border border-teal-500 rounded-md bg-gray-700 text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              placeholder="Enter Allocation Details"
              value={allocation}
              onChange={(e) => setAllocation(e.target.value)}
            />
          </div>

          <button
            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 mb-4"
            onClick={handleAllocate}
          >
            Allocate Daig
          </button>

          {/* Back Button */}
          {/* <button
            onClick={handleBackClick}
            className="mt-6 bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
          >
            Back to Home
          </button> */}
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

export default AllocateDaig;
