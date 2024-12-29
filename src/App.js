// src/App.js
import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Itinerary from './pages/Itinerary';
import MapPage from './pages/MapPage';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import config from './chatbot/ChatbotConfig';
import CustomMessageParser from './chatbot/CustomMessageParser';
import CustomActionProvider from './chatbot/CustomActionProvider';
import './App.css';

const AppContent = () => {
  const location = useLocation();
  const showChatbot = !['/login', '/register', '/profile'].includes(location.pathname);

  return (
    <div>
      <MainMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/itinerary" element={<Itinerary />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>

      {showChatbot && (
        <div className="chatbot-container">
          <Chatbot 
            config={config} 
            messageParser={CustomMessageParser} 
            actionProvider={CustomActionProvider} 
          />
        </div>
      )}
    </div>
  );
};

const App = () => (
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>
);

export default App;
