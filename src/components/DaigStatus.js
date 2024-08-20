import React, { useContext, useState } from 'react';
import { DaigContext } from '../context/DaigContext';


const DaigStatus = () => {
  const { daigs, trackDaigStatus } = useContext(DaigContext);
  const [selectedDaig, setSelectedDaig] = useState('');
  const [status, setStatus] = useState('');

  const handleStatusUpdate = () => {
    if (selectedDaig && status) {
      trackDaigStatus(selectedDaig, status);
      setStatus('');
    } else {
      alert('Please select a Daig and enter a status.');
    }
  };

  return (
    <div className="daig-status daig-status-container">
      <h2 className="section-title">Manage Daig Status</h2>
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
        className="input-status"
        placeholder="Enter Status"
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button className="action-button" onClick={handleStatusUpdate}>Update Status</button>
    </div>
  );
}

export default DaigStatus;
