import React, { useState } from "react";

function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="text-center mb-4">
      <input
        type="text"
        className="form-control"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" className="btn btn-primary mt-2">
        Get Weather
      </button>
    </form>
  );
}

export default SearchBar;
