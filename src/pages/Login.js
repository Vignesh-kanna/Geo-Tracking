import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt } from '@fortawesome/free-solid-svg-icons'; // Login icon
import './Login.css'; // Import the CSS file

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false); // New state for message color
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get(`http://localhost:5000/users?email=${formData.email}&password=${formData.password}`);
      if (response.data.length > 0) {
        setIsSuccess(true);
        setMessage("Login successful!");
        navigate('/profile'); // Navigate to profile page
      } else {
        setIsSuccess(false);
        setMessage("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setIsSuccess(false);
      setMessage("Failed to login. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          required
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          onChange={handleChange}
          value={formData.password}
          required
        />
        <button type="submit">
          <FontAwesomeIcon icon={faSignInAlt} /> Login
        </button>
      </form>
      <p className={isSuccess ? 'message' : ''}>{message}</p>
    </div>
  );
};

export default Login;
