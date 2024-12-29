// src/components/LanguageSettings.js
import React from 'react';

const LanguageSettings = () => {
  return (
    <div>
      <h2>Language Settings</h2>
      <select>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        {/* Add more languages as needed */}
      </select>
    </div>
  );
}

export default LanguageSettings;
