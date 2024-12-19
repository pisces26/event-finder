import express from "express";
import EventModel from "../models/Event.js"; 


const eventRoutes = express.Router();


// Endpoint to fetch all events
eventRoutes.get("/", async (req, res) => {
  try {
    const events = await EventModel.find();
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

export default eventRoutes;