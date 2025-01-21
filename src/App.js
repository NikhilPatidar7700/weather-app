import React, { useState } from 'react';
import axios from 'axios';
import './App.css'; // Import the CSS file for styling

function App() {
  const [city, setCity] = useState(''); // State for city input
  const [weather, setWeather] = useState(null); // State for weather data
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(''); // Error state

  // OpenWeatherMap API URL and Key
  const API_KEY = '6e0882df04d8838adbb675b6cc03d81e'; // Replace with your OpenWeatherMap API key
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  const fetchWeather = async () => {
    if (!city) return;
    setLoading(true);
    setError('');
    try {
      const response = await axios.get(API_URL);
      setWeather(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError('City not found!');
    }
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">Weather App</h1>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="search-input"
        />
        <button onClick={fetchWeather} className="search-button">Get Weather</button>

        {loading && <div className="loading">Loading...</div>}

        {error && <div className="error">{error}</div>}

        {weather && !loading && !error && (
          <div className="weather-info fadeIn">
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <h3>{weather.main.temp}°C</h3>
            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} m/s</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
