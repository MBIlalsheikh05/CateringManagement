import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Mock function to simulate updating the Daig data
const updateDaig = (id, updatedData) => {
  console.log(`Daig with ID: ${id} has been updated with the following data:`, updatedData);
  return true; // Simulates a successful update
};

// Mock data for the available Daigs
const availableDaigs = [
  { id: 1, name: 'Chicken Biryani', quantity: 10 },
  { id: 2, name: 'Mutton Pulao', quantity: 5 },
  { id: 3, name: 'Vegetable Biryani', quantity: 8 },
];

const UpdateDaigForm = ({ closeForm }) => {
  const [selectedDaigId, setSelectedDaigId] = useState('');
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const navigate = useNavigate();

  const handleSelectChange = (e) => {
    const selectedId = parseInt(e.target.value);
    setSelectedDaigId(selectedId);

    const selectedDaig = availableDaigs.find((daig) => daig.id === selectedId);
    if (selectedDaig) {
      setName(selectedDaig.name);
      setQuantity(selectedDaig.quantity);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedDaigId) {
      alert('Please select a Daig to update.');
      return;
    }

    const success = updateDaig(selectedDaigId, { name, quantity });
    if (success) {
      closeForm();
    } else {
      console.error('Failed to update Daig.');
    }
  };

  // Updated function to navigate back to the main home screen
  const handleBackClick = () => {
    navigate('/home'); // Navigate to the home screen route
  };

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      <div className="flex-1 flex items-center justify-center p-6">
        <form className="bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full" onSubmit={handleSubmit}>
          <h3 className="text-3xl font-semibold text-teal-400 mb-6">Update Daig</h3>

          {/* Dropdown to select the Daig */}
          <div className="mb-4">
            <label htmlFor="select-daig" className="block text-gray-200 text-sm font-medium mb-2">Select Daig</label>
            <select
              id="select-daig"
              value={selectedDaigId}
              onChange={handleSelectChange}
              className="w-full p-3 border border-teal-500 rounded-md bg-gray-700 text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            >
              <option value="">Select a Daig</option>
              {availableDaigs.map((daig) => (
                <option key={daig.id} value={daig.id}>
                  {daig.name}
                </option>
              ))}
            </select>
          </div>

          {/* Daig Name Input */}
          <div className="mb-4">
            <label htmlFor="daig-name" className="block text-gray-200 text-sm font-medium mb-2">Name</label>
            <input
              id="daig-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-teal-500 rounded-md bg-gray-700 text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          {/* Daig Quantity Input */}
          <div className="mb-6">
            <label htmlFor="daig-quantity" className="block text-gray-200 text-sm font-medium mb-2">Quantity</label>
            <input
              id="daig-quantity"
              type="number"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="w-full p-3 border border-teal-500 rounded-md bg-gray-700 text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
              required
            />
          </div>

          <div className="flex justify-between mb-6">
            <button
              type="submit"
              className="bg-teal-600 text-white py-2 px-4 rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300"
            >
              Update
            </button>
            <button
              type="button"
              onClick={closeForm}
              className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleBackClick}
              className="bg-gray-600 text-white py-2 px-4 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
            >
              Back to Home
            </button>
          </div>
        </form>
      </div>

      {/* Footer */}
      <footer className="bg-[#16222a] text-gray-200 p-4 text-center">
        <p>&copy; Catering Manager</p>
      </footer>
    </div>
  );
};

// A placeholder function for closeForm if you don't have it implemented yet
UpdateDaigForm.defaultProps = {
  closeForm: () => alert('Form closed!'),
};

export default UpdateDaigForm;
