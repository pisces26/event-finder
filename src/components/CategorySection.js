import React from "react";
import EventCard from "./EventCard";

const CategorySection = ({ title, events }) => (
  <section className="category-section">
    <h2>{title}</h2>
    <div className="event-grid">
      {events.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  </section>
);

export default CategorySection;
