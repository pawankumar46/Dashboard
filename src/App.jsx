import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Sales from './pages/Sales';
import Purchases from './pages/Purchases';
import Inventory from './pages/Inventory';
import Analytics from './pages/Analytics';
import Settings from './pages/Settings';
import Team from './pages/Team';
import Layout from './pages/Layout';

function App() {
  

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/purchases" element={<Purchases />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/team" element={<Team />} />
      </Routes>
    </Router>
  );
}

export default App;
