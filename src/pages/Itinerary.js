// src/pages/Itinerary.js
import React, { useState } from 'react';
import './Itinerary.css';

const Itinerary = () => {
  const [trips, setTrips] = useState([
    { name: 'Trip to Paris', details: 'Visit Eiffel Tower, Louvre Museum' },
  ]);

  const handleAddTrip = () => {
    const newTrip = { name: 'New Trip', details: 'Plan your trip here' };
    setTrips([...trips, newTrip]);
  };

  return (
    <div className="itinerary-container">
      <h1>My Trips</h1>
      <button onClick={handleAddTrip} className="add-trip-button">Create New Trip</button>
      <div className="trip-list">
        {trips.map((trip, index) => (
          <div key={index} className="trip-card">
            <h3>{trip.name}</h3>
            <p>{trip.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Itinerary;
