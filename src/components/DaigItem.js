// src/components/DaigItem.js
import React, { useContext } from 'react';
import { DaigContext } from '../context/DaigContext';

const DaigItem = ({ daig }) => {
  const { deleteDaig } = useContext(DaigContext);

  const handleDelete = () => {
    deleteDaig(daig.id); // Ensure daig has an 'id' property
  };

  return (
    <div>
      <p>{daig.name} - Quantity: {daig.quantity}</p>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default DaigItem;
