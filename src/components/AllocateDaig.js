import React, { useContext, useState } from 'react';
import { DaigContext } from '../context/DaigContext';


const AllocateDaig = () => {
  const { daigs, allocateDaig } = useContext(DaigContext);
  const [selectedDaig, setSelectedDaig] = useState('');
  const [allocation, setAllocation] = useState('');

  const handleAllocate = () => {
    if (selectedDaig && allocation) {
      allocateDaig(selectedDaig, allocation);
      setAllocation('');
    } else {
      alert('Please select a Daig and enter allocation details.');
    }
  };

  return (
    <div className="allocate-daig allocate-daig-container">
      <h2 className="section-title">Allocate Daig</h2>
      <select
        className="select-daig"
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
      <input
        type="text"
        className="input-allocation"
        placeholder="Enter Allocation Details"
        value={allocation}
        onChange={(e) => setAllocation(e.target.value)}
      />
      <button className="action-button" onClick={handleAllocate}>Allocate Daig</button>
    </div>
  );
}

export default AllocateDaig;
