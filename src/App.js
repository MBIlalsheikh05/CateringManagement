// src/App.js
import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { DaigProvider } from './context/DaigContext';
import Home from './Pages/Home';
import AddDaigForm from './components/AddDaigForm';
import DaigList from './components/DaigList';
import DaigStatus from './components/DaigStatus';
import AllocateDaig from './components/AllocateDaig';
import UpdateDaigForm from './components/UpdateDaigForm';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import AuthForm from './AuthForm';

function App() {
  return (
    <DaigProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/authform" element={<AuthForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/add-daig" element={<AddDaigForm />} />
        <Route path="/daig-list" element={<DaigList />} />
        <Route path="/daig-status" element={<DaigStatus />} />
        <Route path="/allocate-daig" element={<AllocateDaig />} />
        <Route path="/update-daig" element={<UpdateDaigForm />} />
      </Routes>
    </DaigProvider>
  );
}

export default App;
