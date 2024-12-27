import React, { useEffect, useState } from "react";
import axios from "axios";
import '../../App.css';
import {fetchEventDetails, fetchAllEvents} from "../../utilities/fetchSingleEventData.js";

export const StandupCard = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetchAllEvents("Standup").then((response) => {

      for (let i = 0; i < response.length; i++) {
        if (response[i].poster) {
          const posterData = response[i].poster?.data?.data; // Access raw byte data
          const posterContentType = response[i].poster?.contentType; // Access the MIME type
          const uint8Array = new Uint8Array(posterData);
          let binaryString = "";
          for (let i = 0; i < uint8Array.length; i++) {
            binaryString += String.fromCharCode(uint8Array[i]);
          }

          // Encode to Base64
          const base64String = btoa(binaryString);

          // Construct the Data URI
          const dataURI = `data:${posterContentType};base64,${base64String}`;
          response[i].poster = dataURI;
        }
      }

      setEvents(response);
    })
  }, []);

  return (
    <div className="event-grid">
      {events?.map((event) => (
        <div key={event._id} className="event-card">
          <img src={event?.poster} alt={event?.title} />
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

export default StandupCard;
