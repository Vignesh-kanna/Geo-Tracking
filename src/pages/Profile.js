import React, { useState } from 'react';
import axios from 'axios';

const Profile = () => {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    bio: '',
    location: '',
    profilePicture: ''
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/profiles', formData);
      setMessage('Profile saved successfully!');
      console.log(response.data);
    } catch (error) {
      setMessage('Failed to save profile');
      console.error("Error saving profile:", error);
    }
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: 'auto', fontFamily: 'Arial, sans-serif' }}>
      <h2>Profile Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={formData.email}
          style={{ display: 'block', width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px' }}
        />
        <input
          name="username"
          placeholder="Username"
          onChange={handleChange}
          value={formData.username}
          style={{ display: 'block', width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px' }}
        />
        <input
          name="bio"
          placeholder="Bio"
          onChange={handleChange}
          value={formData.bio}
          style={{ display: 'block', width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px' }}
        />
        <input
          name="location"
          placeholder="Location"
          onChange={handleChange}
          value={formData.location}
          style={{ display: 'block', width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px' }}
        />
        <input
          name="profilePicture"
          placeholder="Profile Picture URL"
          onChange={handleChange}
          value={formData.profilePicture}
          style={{ display: 'block', width: '100%', padding: '8px', margin: '8px 0', borderRadius: '4px' }}
        />
        <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '4px' }}>
          Save Profile
        </button>
      </form>
      <p>{message}</p>
    </div>
  );
};

export default Profile;
