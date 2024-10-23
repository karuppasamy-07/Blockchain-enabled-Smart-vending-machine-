// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Login from './pages/Login';
import MedicineSelection from './pages/MedicineSelection';
import AuthorizedAccess from './pages/AuthorizedAccess'; // Import the new component

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<h2>Welcome to Smart Vending Machine</h2>} />
          <Route path="/login" element={<Login />} />
          <Route path="/medicine" element={<MedicineSelection />} />
          <Route path="/about" element={<h2>About Us</h2>} />
          <Route path="/authorized-access" element={<AuthorizedAccess />} /> {/* Add the new route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
