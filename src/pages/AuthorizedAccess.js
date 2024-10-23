// src/pages/AuthorizedAccess.js
import React, { useState } from 'react';
import './AuthorizedAccess.css'; // Create this CSS file for styling

const AuthorizedAccess = () => {
  const [accessCode, setAccessCode] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with actual validation logic
    if (accessCode === 'VALID_CODE') {
      alert('Access Granted');
      // Redirect or perform actions for authorized users
    } else {
      alert('Access Denied');
    }
  };

  return (
    <div className="access-container">
      <h1>Authorized Access</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Enter Access Code</label>
          <input
            type="text"
            value={accessCode}
            onChange={(e) => setAccessCode(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="access-btn">Submit</button>
      </form>
    </div>
  );
};

export default AuthorizedAccess;
