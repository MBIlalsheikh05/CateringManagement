import React, { useState, useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { DaigContext } from '../context/DaigContext';

const UpdateDaigForm = ({ closeForm }) => {
  const location = useLocation();
  const { daig } = location.state || {}; // Access passed data
  const { updateDaig } = useContext(DaigContext);

  const [name, setName] = useState(daig ? daig.name : '');
  const [quantity, setQuantity] = useState(daig ? daig.quantity : '');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateDaig(daig.id, { name, quantity });
    closeForm();
  };

  if (!daig) {
    return <p>Loading...</p>;
  }

  return (
    <form className="update-daig-form" onSubmit={handleSubmit}>
      <h3 className="form-heading">Update Daig</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-field"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="input-field"
        required
      />
      <button type="submit" className="submit-button">Update</button>
      <button type="button" onClick={closeForm} className="cancel-button">Cancel</button>
    </form>
  );
};

export default UpdateDaigForm;
