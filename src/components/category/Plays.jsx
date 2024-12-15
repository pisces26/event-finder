// create separate page for each Plays, when clicked from nav tab will show it's relevant event cards
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import eventsData from "../../data/eventsData";

export default function CategoryPage() {
  const { Plays } = useParams();
  const [events, setEvents,] = useState([]);

  useEffect(() => {
    // Fetch relevant events for the Plays
    //fetch only events with id=1
    
    fetch(`http://localhost:3000/events?Plays=${Plays}`)
      .then(response => response.json())
      .then(data => setEvents(data))
      .catch(err => console.error("Error fetching events:", err));
  }, [Plays]);

  return (
    <div className="Plays-page">
      <h1> Events</h1>
      <div className="event-cards">
    {eventsData.map(event => (
      <div key={event.id} className="event-card">
        <img src={event.image} alt={event.title} />
        <div className="card-content">
          <h3>{event.title}</h3>
          <p>{event.date}</p>
          <p>{event.location}</p>
          <p className="price">{event.price}</p>
        </div>
        <button className="card-button">Book Now</button>
      </div>
    ))}
      </div>
    </div>
  );
}



