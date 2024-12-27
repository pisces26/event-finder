import React, { use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faFlag, faHeart } from "@fortawesome/free-regular-svg-icons";
import "./EventDetails.css";
import { useState, useEffect } from "react";

import {
  faDashcube,
  faFacebook,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const EventDetails = () => {
  const [currentIcon, setCurrentIcon] = useState("hollowheart"); // Default icon is 'beer'
  const [currentResponse, setCurrentResponse] = useState(null);
  // Function to handle icon change
  const handleIconClick = () => {
    setCurrentIcon((prevIcon) => {
      if (prevIcon === "faHeart") return "heart";
      return "faHeart"; // Cycle back to 'beer'
    });
  };

  useEffect(() => {
    if (window.sessionStorage.getItem("eventData") === null) {
      window.location.href = "/"; // Redirect to home page if no event data in session storage
    }
    let selectedResponse = window.sessionStorage.getItem("eventData");
    selectedResponse = JSON.parse(selectedResponse);

    if (selectedResponse.data.poster) {
      const posterData = selectedResponse?.data?.poster?.data?.data; // Access raw byte data
      const posterContentType = selectedResponse?.data?.poster?.contentType; // Access the MIME type
      const uint8Array = new Uint8Array(posterData);
      let binaryString = "";
      for (let i = 0; i < uint8Array.length; i++) {
        binaryString += String.fromCharCode(uint8Array[i]);
      }

      // Encode to Base64
      const base64String = btoa(binaryString);

      // Construct the Data URI
      const dataURI = `data:${posterContentType};base64,${base64String}`;
      selectedResponse.data.poster = dataURI;
    }
    window.sessionStorage.removeItem("eventData");
    setCurrentResponse(selectedResponse?.data);
  }, []);

  return (
    <>
      <div className="change">
        <div onClick={handleIconClick} style={{ cursor: "pointer" }}>
          {currentIcon === "faHeart" && <faHeart color="red" />}
        </div>
      </div>
      <div className="page">
        <event-details>
          <h2>Event Details:</h2>
          <img
            src={currentResponse?.poster} // Replace with the actual image URL
            alt="Event"
            className="event-image"
          />
        </event-details>

        <content>
          <div className="infoSquare" id="location">
            <div>
              <loc>
                <FontAwesomeIcon
                  icon={faLocationDot}
                  style={{ color: "#fb2d42" }}
                />
              </loc>
              <h4>{currentResponse?.location}</h4>
            </div>
            <div id="map">
              <a href="#">View on maps</a>
            </div>
          </div>

          <div className="infoSquare" id="vote">
            <h3>Upvote This Events?</h3>
            <FontAwesomeIcon icon={faHeart} />
          </div>

          <div className="infoSquare" id="art">
            <p>Artist</p>
            <h2>
              <strong>{currentResponse?.artists}</strong>
            </h2>
          </div>

          <div className="infoSquare" id="flag">
            <h3>Flag Inappropriate</h3>
            <FontAwesomeIcon icon={faFlag} />
          </div>

          <div className="infoSquare" id="share">
            <h3>Share Event</h3>
            <socials className="socials">
              <FontAwesomeIcon icon={faInstagram} />
              <FontAwesomeIcon icon={faWhatsapp} />
              <FontAwesomeIcon icon={faFacebook} />
            </socials>
          </div>
        </content>

        <footer style={{ display: "flex" }}>
          <div id="naming">
            <div id="a">
              <h2>{currentResponse?.title}</h2>
              <h4>{currentResponse?.date}</h4>
            </div>
            <div id="b">
              <p id="amount">{currentResponse?.price}</p>
              <button className="book-now">Book Now</button>
            </div>
          </div>

          <div id="AbountEvent">
            <h3>About This Event:</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              volutpat ex lectus, vitae condimentum erat pretium sed. Morbi
              luctus non urna non blandit.Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Ut volutpat ex lectus, vitae
              condimentum erat pretium sed. Morbi luctus non urna non blandit.
            </p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default EventDetails;
