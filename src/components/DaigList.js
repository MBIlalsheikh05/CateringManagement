import React, { useContext } from 'react';
import { DaigContext } from '../context/DaigContext';

const DaigList = () => {
  const { daigs, deleteDaig } = useContext(DaigContext);

  return (
    <div className="max-w-2xl mx-auto p-6 bg-gray-50 rounded-lg shadow-lg">
      <h3 className="text-2xl font-semibold text-center text-gray-800 mb-6">Daig Inventory</h3>
      <ul className="space-y-4">
        {daigs.length > 0 ? (
          daigs.map((daig) => (
            <li
              key={daig.id}
              className="flex justify-between items-center p-4 bg-white border border-gray-200 rounded-lg shadow-sm"
            >
              <span className="text-lg font-medium text-gray-800">
                {daig.name} - {daig.quantity} units
              </span>
              <button
                className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
                onClick={() => deleteDaig(daig.id)}
              >
                Delete
              </button>
            </li>
          ))
        ) : (
          <li className="text-center text-gray-500">No Daigs Available</li>
        )}
      </ul>
    </div>
  );
};

export default DaigList;
