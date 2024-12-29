// src/pages/Explore.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import './Explore.css';

const Explore = () => {
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

  useEffect(() => {
    const fetchPlaces = async () => {
      // Replace with your actual API or use mock data
      const data = [
        { name: "Place 1", description: "A great place", lat: 40.748817, lng: -73.985428 },
        { name: "Place 2", description: "Another great place", lat: 40.748541, lng: -73.985757 },
      ];
      setPlaces(data);
    };

    fetchPlaces();
  }, []);

  return (
    <div className="explore-container">
      <h1>Explore Nearby</h1>
      <div className="places-grid">
        {places.map((place, index) => (
          <div
            key={index}
            className="place-card"
            onClick={() => setSelectedPlace(place)}
          >
            <h3>{place.name}</h3>
            <p>{place.description}</p>
          </div>
        ))}
      </div>
      <div className="map-container">
        <LoadScript googleMapsApiKey={apiKey}>
          <GoogleMap
            mapContainerStyle={{ height: '400px', width: '100%' }}
            zoom={14}
            center={
              selectedPlace
                ? { lat: selectedPlace.lat, lng: selectedPlace.lng }
                : { lat: places[0]?.lat || 0, lng: places[0]?.lng || 0 }
            }
          >
            {places.map((place, index) => (
              <Marker key={index} position={{ lat: place.lat, lng: place.lng }} />
            ))}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default Explore;
