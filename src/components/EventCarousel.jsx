import React, { useState } from "react";
import "./EventCarousel.css";

const EventCarousel = () => {
  const events = [
    {
      id: 1,
      image: "/Assets/MusicFestival.jpg",
      title: "Music Festival",
      date: "2024-12-20",
      time: "6:00 PM",
      location: "Kothrud, Pune",
    },
    {
      id: 2,
      image: "/Assets/ArtExhibition.jpg",
      title: "Art Exhibition",
      date: "2024-12-22",
      time: "11:00 AM",
      location: "Sadashiv peth, Pune",
    },
    {
      id: 3,
      image: "/Assets/FoodCarnival2.jpg",
      title: "Food Carnival",
      date: "2024-12-25",
      time: "12:00 PM",
      location: "Camp, Pune",
    },
    {
      id: 4,
      image: "/Assets/DanceWorkshop2.jpg",
      title: "Dance Workshop",
      date: "2024-12-28",
      time: "9:00 AM",
      location: "Karve nagar, Pune",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % events.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? events.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel-container">
      <div
        className="carousel-track"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {events.map((event) => (
          <div className="carousel-slide" key={event.id}>
            <img src={event.image} alt={event.title} className="carousel-image" />
            <div className="event-details">
              <h2 className="event-title">{event.title}</h2>
              <p className="event-date">
                <strong>Date:</strong> {event.date}
              </p>
              <p className="event-time">
                <strong>Time:</strong> {event.time}
              </p>
              <p className="event-location">
                <strong>Location:</strong> {event.location}
              </p>
              <button className="book-now-btn">Book Now</button>
            </div>
          </div>
        ))}
      </div>
      <button className="carousel-btn prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="carousel-btn next" onClick={nextSlide}>
        &#10095;
      </button>
      <div className="carousel-indicators">
        {events.map((_, index) => (
          <span
            key={index}
            className={`indicator ${
              index === currentIndex ? "active" : ""
            }`}
            onClick={() => setCurrentIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default EventCarousel;
