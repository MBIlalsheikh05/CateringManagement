import React, { useContext } from 'react';
import { DaigContext } from '../context/DaigContext';


const DaigList = () => {
  const { daigs, deleteDaig } = useContext(DaigContext);

  return (
    <div className="daig-list daig-list-container">
      <h3 className="list-title">Daig Inventory</h3>
      <ul className="daig-list-items">
        {daigs.map((daig) => (
          <li key={daig.id} className="daig-list-item">
            <span>{daig.name} - {daig.quantity} units</span>
            <button className="delete-button" onClick={() => deleteDaig(daig.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DaigList;
