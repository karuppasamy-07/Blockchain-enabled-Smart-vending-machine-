import React, { useState } from 'react';
import './Login.css';
import logo from '../assets/logo.png'; // Ensure this path points to your logo

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add validation logic here
    if (username && password) {
      // Handle successful login (e.g., API call)
      console.log('Login successful!');
    } else {
      alert('Please enter both username and password.');
    }
  };

  return (
    <div className="login-container">
      <img src={logo} alt="Smart Vending Machine" className="logo" />
      <h1 className="login-title">Sign in to your account</h1>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Username or Email</label>
          <input 
            type="text" 
            name="username" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input 
            type="password" 
            name="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
        </div>
        <div className="form-group">
          <label>
            <input 
              type="checkbox" 
              checked={rememberMe} 
              onChange={() => setRememberMe(!rememberMe)} 
            /> Remember Me
          </label>
        </div>
        <button type="submit" className="login-btn">Sign in</button>
      </form>
      <div className="login-links">
        <a href="/forgot-password">Forgot password?</a>
        <span> • </span>
        <a href="/register">Create an account</a>
      </div>
    </div>
  );
};

export default Login;
