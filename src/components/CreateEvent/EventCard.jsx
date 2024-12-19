import React, { useEffect, useState } from "react";
import axios from "axios";

export const EventCards = () => {
  // Define the state for events
  const [events, setEvents] = useState([]);

  // Fetch events data on component mount
  useEffect(() => {
    axios.get("http://localhost:3001/api/getEvents") //URL for fetching events
      .then(events => setEvents(events.data)) // setEvents(response.data); // Update state with the fetched data
      .catch(error => console.error("Error fetching events:", error)) // Log any errors
     
  }, []); // Empty dependency array to run this effect only once on component mount

  return (
    <div className="event-grid">
      {events.map(event => {
        return(
        <div key={event._id} className="event-card">
          <img src={event.image} alt={event.title} className="event-image" />
          <h2 className="event-title">{event.title}</h2>
          <p className="event-date">{event.date}</p>
          <p className="event-location">{event.location}</p>
          <p className="event-price">{event.price}</p>
          <p className="event-category">{event.category}</p>
        </div>)
      })}
    </div>
  );
};

export default EventCards;
