import React, { useState, useContext } from 'react';
import { DaigContext } from '../context/DaigContext';
import './components.css' 

const AddDaigForm = () => {
  const { addDaig } = useContext(DaigContext);
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addDaig({ name, quantity });
    setName('');
    setQuantity('');
  };

  return (
    <form className="add-daig-form" onSubmit={handleSubmit}>
      <h3 className="form-heading">Add New Daig</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Daig Name"
        className="input-field"
        required
      />
      <input
        type="number"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        placeholder="Quantity"
        className="input-field"
        required
      />
      <button type="submit" className="submit-button">Add Daig</button>
    </form>
  );
};

export default AddDaigForm;
