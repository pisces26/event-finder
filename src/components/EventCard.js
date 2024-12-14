import React from "react";

const EventCard = ({ event }) => (
  <div className="event-card">
    <img src={event.image} alt={event.title} />
    <div className="card-content">
      <h3>{event.title}</h3>
      <p>{event.date}</p>
      <p>{event.location}</p>
      <p className="price">{event.price}</p>
    </div>
    <button className="card-button">Book Now</button>
  </div>
);

export default EventCard;
