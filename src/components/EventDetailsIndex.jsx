import axios from "axios";
import { Link } from "react-router-dom";
import { useState } from "react";
import AboutEvent from "./eventDetails/AboutEvent";
import EventDetails from "./eventDetails/EventDetails";

export default function EventDetailsIndex() {
  return (
    <div>
      {/* <Header /> */}
      <AboutEvent />
      <EventDetails />
    </div>
  );
}
