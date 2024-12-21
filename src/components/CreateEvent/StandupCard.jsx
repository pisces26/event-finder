import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../App.css';

export const StandupCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/events/category/Standup")
      .then((response) => {
        setEvents(response.data);
      })
      .catch((error) => {
        console.error("Error fetching standup events:", error);
      });
  }, []);

  return (
    <div className="event-grid">
      {events.map((event) => (
        <div key={event._id} className="event-card">
          <img src={event.image} alt={event.title} />
          <div className="card-content">
          <h3>{event.title}</h3>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <p className="price">{event.price}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StandupCard;
