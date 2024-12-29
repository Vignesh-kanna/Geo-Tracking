import axios from 'axios';


const API_URL = 'http://localhost:5000/api';

// Save User Profile
export const saveUserProfile = async (userData) => {
  return await axios.post(`${API_URL}/profile`, userData);
};

// Fetch User Profile by Email
export const fetchUserProfile = async (email) => {
  return await axios.get(`${API_URL}/profile/${email}`);
};
