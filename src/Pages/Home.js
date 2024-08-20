// src/Pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';


function Home() {
  return (
    <div className="home">
      <header className="header">
        {/* The logo and navigation links have been removed */}
      </header>

      <section className="hero">
        <h1>Catering Service Manager</h1>
        <p>Efficiently manage your daig inventory, allocation, and status tracking.</p>
      </section>

      <div className="card-container">
        <div className="card">
          <h2>Add Daig</h2>
          <p>Keep your inventory up to date with new daigs.</p>
          <Link to="/add-daig">Add Now</Link>
        </div>
        <div className="card">
          <h2>Daig Inventory</h2>
          <p>View and manage your current daig inventory.</p>
          <Link to="/daig-list">View Inventory</Link>
        </div>
        <div className="card">
          <h2>Manage Daig Status</h2>
          <p>Track the status of allocated and available daigs.</p>
          <Link to="/daig-status">Manage Status</Link>
        </div>
        <div className="card">
          <h2>Allocate Daig</h2>
          <p>Assign daigs for upcoming events or orders.</p>
          <Link to="/allocate-daig">Allocate Now</Link>
        </div>
        <div className="card">
          <h2>Update Daig</h2>
          <p>Assign daigs for upcoming events or orders.</p>
          <Link to="/update-daig">Update Now</Link>
        </div>
      </div>

      <footer className="footer">
        <p>&copy; 2024 Catering Service Manager</p>
      </footer>
    </div>
  );
}

export default Home;
