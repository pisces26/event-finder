// routes/eventRoutes.js
import express from "express";
import EventModel from "../models/Event.js";

const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const events = await EventModel.find();
    res.json(events);
  } catch (error) {
    console.error("Error fetching events:", error.message);
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

// Inside eventRoutes.js

// Endpoint to fetch events by category
router.get("/category/:category", async (req, res) => {
  const { category } = req.params;
  try {
    const events = await EventModel.find({ category });
    res.json(events);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch events by category" });
  }
});



export default router;
