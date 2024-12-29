import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'; // Register icon
import './Register.css'; // Import the CSS file for styling

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log('Attempting registration...'); // Debugging log
      const response = await axios.get(`http://localhost:5000/users?email=${formData.email}`);
      console.log('Response:', response); // Log response for debugging
      if (response.data.length > 0) {
        setMessage("User already registered. Please login.");
      } else {
        await axios.post('http://localhost:5000/users', formData);
        setMessage("Registration successful! Please login.");
        navigate('/login'); // Navigate to login page
      }
    } catch (error) {
      console.error('Error during registration:', error); // Log error for debugging
      setMessage('Failed to register. Please try again.');
    }
  };

  return (
    <div className="auth-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
          required
        />
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
          <FontAwesomeIcon icon={faUserPlus} /> Register
        </button>
      </form>
      <p className="message">{message}</p>
    </div>
  );
};

export default Register;
