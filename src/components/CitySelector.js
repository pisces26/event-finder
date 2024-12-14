import React, { useState } from "react";

const CitySelector = () => {
  const [selectedCity, setSelectedCity] = useState("Pune");

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };

  return (
    <div className="city-selector">
      <select className="city" value={selectedCity} onChange={handleCityChange}>
        <option className="opt" value="Pune">Pune</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Delhi">Delhi</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Chennai">Chennai</option>
      </select>
      {/* <p>You have selected: <strong>{selectedCity}</strong></p> */}
    </div>
  );
};

export default CitySelector;
