// server/models/User.js
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  bio: { type: String },
  tripsVisited: { type: Number, default: 0 },
  distanceTraveled: { type: Number, default: 0 },
  favoriteLocations: [{ type: String }],
  recentLocations: [{ type: String }],
  achievements: [{ type: String }]
});

module.exports = mongoose.model('User', userSchema);
