import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import eventRoutes from "../routes/fetchEvent.js"; // Adjust this path
import EventModel from "../models/Event.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/Event", eventRoutes);

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

app.get('/getEvents', (req, res)=>{
  EventModel.find()
  .then((events) => res.json(events))
  .catch((error) => res.status(400).json("Error: " + error));
})


const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
