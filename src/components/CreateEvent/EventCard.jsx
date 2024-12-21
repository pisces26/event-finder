import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../App.css';

export const EventCards = () => {
  // Define the state for events
  const [events, setEvents] = useState([]);
  const [categories, setCategories] = useState({});

  // Fetch events data on component mount
  useEffect(() => {
    // axios.get("http://localhost:3001/api/events") //URL for fetching events
    //   .then(events => setEvents(events.data)) // setEvents(response.data); // Update state with the fetched data
    //   .catch(error => console.error("Error fetching events:", error)) // Log any errors


    axios
      .get("http://localhost:3001/api/events") 
      .then((response) => {
        const fetchedEvents = response.data;

        // Group events by category
        const categorizedEvents = fetchedEvents.reduce((acc, event) => {
          if (!acc[event.category]) {
            acc[event.category] = [];
          }
          acc[event.category].push(event);
          return acc;
        }, {});

        setEvents(fetchedEvents);
        setCategories(categorizedEvents);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
     
  }, []); // Empty dependency array to run this effect only once on component mount

  return (
    <div className="event-container">
      {Object.keys(categories).map((category) => (
        <div key={category} className="event-card">
        <h2 >{category}</h2>
        <div className="event-grid">
        {categories[category].map((event) => (
          <div key={event._id} className="event-card">
          <img src={event.image} alt={event.title} />
        <div className="card-content">
          <h2 >{event.title}</h2>
          <p >{event.date}</p>
          <p>{event.location}</p>
          <p className="price">{event.price}</p>
        </div>
          {/* <p className="event-category">{event.category}</p> */}
        </div>
        ))}
      </div>
    </div>
  ))}
  </div>
  );
};

export default EventCards;
