const mongoose = require('mongoose');

const userProfileSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  username: String,
  bio: String,
  location: String,
  profilePicture: String,
});

module.exports = mongoose.model('UserProfile', userProfileSchema);
