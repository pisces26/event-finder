import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  title: String,
  date: String,
  location: String,
  price: String,
  // image: String,
  category: String, // For categorizing events
  artists: String,
  poster: {
    name: String,
    data: Buffer,
    contentType: String,
  },
});

const EventModel = model("events", eventSchema);

export default EventModel;
