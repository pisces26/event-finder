import React, { useState } from "react";

export default function CreateEventForm() {
  const [formData, setFormData] = useState({
    category: [],
    eventType: [],
    language: [],
    priceRange: [],
    dateTime: "",
    location: "",
    poster: null,
    totalSeats: "",
    eventTitle: "",
    artists: [""],
    organizers: [""],
  });

  const handleCheckboxChange = (field, value) => {
    setFormData((prevState) => {
      const updatedField = prevState[field].includes(value)
        ? prevState[field].filter((item) => item !== value)
        : [...prevState[field], value];
      return {
        ...prevState,
        [field]: updatedField,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "file" ? files[0] : value,
    });
  };

  const handleAddField = (field) => {
    setFormData({
      ...formData,
      [field]: [...formData[field], ""],
    });
  };

  const handleFieldChange = (index, field, value) => {
    const updatedField = [...formData[field]];
    updatedField[index] = value;
    setFormData({
      ...formData,
      [field]: updatedField,
    });
  };

  const handleLocationSelect = (e) => {
    setFormData({
      ...formData,
      location: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.eventTitle || !formData.totalSeats || !formData.location) {
      alert("Please fill all required fields.");
      return;
    }
    alert("Form Data Submitted");
  };

  return (
    <div className="create-event-form max-w-2xl mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl text-red-700 font-bold mb-6 ">Create Your Event</h1>
      <form onSubmit={handleSubmit}>
        {/* Category Selection */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-bold mb-2">Select Your Category</label>
          <div className="flex flex-wrap">
            {["Music", "Art & Crafts", "Dance", "Drama", "Games", "Culinary", "Competitions", "Comedy", "Sports", "Kids"].map((category) => (
              <label key={category} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  value={formData.category}
                  checked={formData.category.includes(category)}
                  onChange={() => handleCheckboxChange("category", category)}
                  className="mr-2"
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Event Type Selection */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-bold mb-2">Select Event Type</label>
          <div className="flex flex-wrap">
            {["Festival", "Workshop", "Concert", "Show", "Contest", "Party"].map((type) => (
              <label key={type} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  value={formData.type}
                  checked={formData.eventType.includes(type)}
                  onChange={() => handleCheckboxChange("eventType", type)}
                  className="mr-2"
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        {/* Language Selection */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-bold mb-2">Select Language</label>
          <div className="flex flex-wrap">
            {["English", "Marathi", "Hindi", "Tamil", "Malayalam"].map((lang) => (
              <label key={lang} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  value={formData.lang}
                  checked={formData.language.includes(lang)}
                  onChange={() => handleCheckboxChange("language", lang)}
                  className="mr-2"
                />
                {lang}
              </label>
            ))}
          </div>
        </div>

        {/* Price Range */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-bold mb-2">Select Price Range</label>
          <div className="flex flex-wrap">
            {["Free", "0 to 500", "500 to 1000", "1000 onwards"].map((price) => (
              <label key={price} className="mr-4 mb-2">
                <input
                  type="checkbox"
                  value={formData.price}
                  checked={formData.priceRange.includes(price)}
                  onChange={() => handleCheckboxChange("priceRange", price)}
                  className="mr-2"
                />
                {price}
              </label>
            ))}
          </div>
        </div>

        {/* Date & Time */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-bold mb-2">Select Date & Time</label>
          <input
            type="datetime-local"
            name="dateTime"
            value={formData.dateTime}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Location */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-bold mb-2">Select Location</label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleLocationSelect}
            placeholder="Enter event location"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Poster Upload */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-bold mb-2">Upload Event Poster</label>
          <input
            type="file"
            name="poster"
            onChange={handleChange}
           
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Total Seats */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-bold mb-2">Total Seats</label>
          <input
            type="number"
            name="totalSeats"
            value={formData.totalSeats}
            onChange={handleChange}
            placeholder="Enter total seats"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Event Title */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-bold mb-2">Event Title</label>
          <input
            type="text"
            name="eventTitle"
            value={formData.eventTitle}
            onChange={handleChange}
            placeholder="Enter event title"
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        {/* Artists */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-bold mb-2">Name of Artists</label>
          {formData.artists.map((artist, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={formData.artist}
                onChange={(e) => handleFieldChange(index, "artists", e.target.value)}
                placeholder="Artist Name"
                className="w-full px-3 py-2 border rounded-md"
              />
              {index === formData.artists.length - 1 && (
                <button
                  type="button"
                  onClick={() => handleAddField("artists")}
                  className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md"
                >
                  +
                </button>
              )}
            </div>
          ))}
        </div>

        {/* Organizers */}
        <div className="mb-4">
          <label className="block text-cyan-700 font-bold mb-2">Name of Organizers</label>
          {formData.organizers.map((organizer, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="text"
                value={formData.organizer}
                onChange={(e) => handleFieldChange(index, "organizers", e.target.value)}
                placeholder="Organizer Name"
                className="w-full px-3 py-2 border rounded-md"
              />
              {index === formData.organizers.length - 1 && (
                <button
                  type="button"
                  onClick={() => handleAddField("organizers")}
                  className="ml-2 px-3 py-2 bg-blue-500 text-white rounded-md"
                >
                  +

                </button>
              )}
            </div>
          ))}
        </div>
        

        <button type="submit" className="ml-2 px-3 py-2 bg-blue-500 hover:bg-cyan-400 text-white rounded-md">Submit Event</button>
      </form>
    </div>
  );
}
