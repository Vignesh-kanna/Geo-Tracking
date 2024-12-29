// src/components/MainMenu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './MainMenu.css';
import logo from '../assets/logo.png';

const MainMenu = () => {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <img src={logo} alt="App Logo" className="navbar-logo" />
        <h1 className="navbar-title">Geo-Tracking App</h1>
      </div>
      <nav className="navbar-center">
        <Link to="/" className="navbar-link">Home</Link>
        <Link to="/explore" className="navbar-link">Explore</Link>
        <Link to="/itinerary" className="navbar-link">Itinerary</Link>
        <Link to="/map" className="navbar-link">Map</Link>
        <Link to="/profile" className="navbar-link">Profile</Link>
      </nav>
      <div className="navbar-right">
        <Link to="/login" className="navbar-login-button">Login</Link>
        <Link to="/register" className="navbar-login-button">Register</Link>
      </div>
    </header>
  );
};

export default MainMenu;
