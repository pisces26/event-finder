import mongoose from "mongoose";

const EventDataSchema = new mongoose.Schema({
    title: { type: String, required: true },
    date: { type: String, required: true },
    price: { type: String, unique: true, required: true },
    location: { type: String, required: true },
    category: { type: String, required: true },
    artists: { type: String, required: true },
    organizers: { type: String, required: true },
    totalSeats: { type: String, required: true },
    language: { type: String, required: true },
    eventType: { type: String, required: true },

});

const EventDataModel = mongoose.model("event", EventDataSchema);
export default EventDataModel;


 