import EventDataModel from "../models/EventData.js";

const eventFormSubmit = async (req, res) => {
  console.log("Request received at /eventFormSubmit:", req.body);

  const { category, price, date, location, title } = req.body;
  if (!category || !price || !date || !location || !title) {
    console.log("Missing required fields"); // Debug
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const event = await EventDataModel.create({
      title,
      date,
      price,
      location,
      category,
    });
    console.log("Event saved to DB");
    res.status(201).json({ message: "Event created successfully" });
  } catch (error) {
    console.error(
      "Error during event form submit:",
      error.stack || error.message
    );
    res.status(500).json({ message: "Server error" });
  }
};

export { eventFormSubmit };
