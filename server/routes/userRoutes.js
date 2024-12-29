const express = require('express');
const router = express.Router();
const UserProfile = require('../models/UserProfile');

// Route to save profile data
router.post('/profile', async (req, res) => {
  const { email, username, bio, location, profilePicture } = req.body;

  try {
    let profile = await UserProfile.findOneAndUpdate(
      { email },
      { username, bio, location, profilePicture },
      { new: true, upsert: true } // Upsert option creates a new document if none exists
    );
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save profile' });
  }
});

// Route to get profile data
router.get('/profile/:email', async (req, res) => {
  try {
    const profile = await UserProfile.findOne({ email: req.params.email });
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    res.json(profile);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to fetch profile' });
  }
});

module.exports = router;
