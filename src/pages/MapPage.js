// src/pages/MapPage.js
import React, { useState, useEffect } from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const MapPage = () => {
  const [currentLocation, setCurrentLocation] = useState({ lat: 0, lng: 0 });
  const [places, setPlaces] = useState([]);
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY; // Access the API key

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Log the geolocation position
        console.log("User's position:", position);

        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };
        setCurrentLocation(userLocation);

        // Log the user's current location
        console.log("Current location set to:", userLocation);

        // Fetch nearby places based on current location
        const fetchPlaces = async () => {
          const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${userLocation.lat},${userLocation.lng}&radius=1500&type=restaurant&key=${apiKey}`;
          
          // Log the API URL
          console.log("Fetching places from:", apiUrl);

          try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
              throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setPlaces(data.results);

            // Log the fetched places
            console.log("Fetched places:", data.results);
          } catch (error) {
            console.error("Failed to fetch places:", error);
            alert("Failed to fetch places. Please try again later.");
          }
        };

        fetchPlaces();
      },
      (error) => {
        console.error("Geolocation error:", error);
        alert('Geolocation not supported or permission denied.');
      }
    );
  }, [apiKey]);

  return (
    <LoadScript googleMapsApiKey={apiKey}>
      <GoogleMap mapContainerStyle={{ height: '100vh', width: '100%' }} center={currentLocation} zoom={14}>
        <Marker position={currentLocation} />
        {places.map((place, index) => (
          <Marker key={index} position={{ lat: place.geometry.location.lat, lng: place.geometry.location.lng }} />
        ))}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapPage;
