import EventModel from "../models/Event.js";

const findPlay = async (req, res) => {
    const { clickedEvent } = req.body;
    console.log("clickedEvent: ", clickedEvent);
    if (!clickedEvent) {
      return res.status(400).json({ message: "All fields are required." });
    }
  
    try {
      const playDoc = await EventModel.findOne({location: clickedEvent});
      console.log("playDoc: ", playDoc);
      res.status(201).json({
        message: "Play found successfully!",
        data: { artists: playDoc.artists, title: playDoc.title, date: playDoc.date, location: playDoc.location, price: playDoc.price },
      });
    } catch (error) {
      console.error("Error finding play:", error);
  
      // Handle duplicate email error
      if (error.code === 11000) {
        return res.status(409).json({ message: "Play not found." });
      }
  
      res.status(500).json({ message: "Internal Server Error" });
    } finally {
    }
  
  }

  export { findPlay };