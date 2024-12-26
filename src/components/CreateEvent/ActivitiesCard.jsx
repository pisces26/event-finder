import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../App.css';
import {fetchEventDetails, fetchAllEvents} from "../../utilities/fetchSingleEventData.js";

export const ActivitiesCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchAllEvents("Activities").then((response) => {
      setEvents(response);
    })
  }, []);

  return (
    <div className="event-grid">
      {events.map((event) => (
        <div key={event._id} className="event-card">
          <img src={event?.image} alt={event.title} />
          <div className="card-content">
          <h3>{event?.title}</h3>
          <p>{event?.date}</p>
          <p>{event?.location}</p>
          <p className="price">{event?.price}</p>
          <button onClick={()=>fetchEventDetails(event, "eventDetails")} className="card-button">Book Now</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesCard;
