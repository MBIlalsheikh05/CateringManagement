import  {React, useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { DaigContext } from '../context/DaigContext';

const DaigItem = ({ daig }) => {
  const { deleteDaig } = useContext(DaigContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleDelete = async () => {
    if (!daig) {
      setError('Daig information is missing.');
      return;
    }

    if (window.confirm('Are you sure you want to delete this Daig?')) {
      setLoading(true);
      try {
        await deleteDaig(daig.id); // Ensure deleteDaig is async if it involves a network request
      } catch (err) {
        setError('Failed to delete Daig. Please try again.');
      } finally {
        setLoading(false);
      }
    }
  };

  if (!daig) {
    return <p className="text-red-500 text-center p-4 bg-gray-800 rounded-md">Daig information is missing.</p>;
  }

  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 border border-teal-500 rounded-lg shadow-lg mb-4 transition-transform transform hover:scale-105 hover:shadow-xl">
      <div className="flex-1">
        <p className="text-lg font-semibold text-teal-400">
          {daig.name} - Quantity: <span className="font-bold text-teal-300">{daig.quantity}</span>
        </p>
      </div>
      <div className="ml-4 flex items-center space-x-4">
        <button
          className={`bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={handleDelete}
          disabled={loading}
        >
          {loading ? 'Deleting...' : 'Delete'}
        </button>
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
    </div>
  );
};

const DaigList = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  // Hardcoded daig objects
  const daigs = [
    { id: '1', name: 'Daig A', quantity: 30 },
    { id: '2', name: 'Daig B', quantity: 45 },
    { id: '3', name: 'Daig C', quantity: 60 }
  ];

  return (
    <div className="bg-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <header className="bg-[#16222a] text-teal-400 p-4 shadow-lg flex justify-between items-center">
        <div className="text-2xl font-bold"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 max-w-2xl mx-auto">
          {daigs.map(daig => (
            <DaigItem key={daig.id} daig={daig} />
          ))}
        </div>
      </main>
      
      {/* Back Button */}
      <div className="p-6 flex justify-center">
        <button
          onClick={() => navigate('/home')}
          className="bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 transition duration-300"
        >
          Back to Home
        </button>
      </div>

      {/* Footer */}
      <footer className="bg-[#16222a] text-gray-200 p-4 text-center">
        <p>&copy; Catering Manager</p>
      </footer>
    </div>
  );
};

export default DaigList;
