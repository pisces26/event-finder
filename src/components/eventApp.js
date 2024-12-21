import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import fetchEvent from "../routes/fetchEvent.js"; // Adjust this path

const app = express();

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect("mongodb+srv://foxEvent:2neJ3ExBIz2Fs2JP@cluster0.1cd3z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// app.get('/getEvents', (req, res)=>{
//   EventModel.find()
//   .then((events) => res.json(events))
//   .catch((error) => res.status(400).json("Error: " + error));
// })

// .then(() => {
//   console.log("Connected to MongoDB");
//   app.listen(3001, () => console.log("Server running on http://localhost:3002"));
// })
// .catch((error) => console.error("Failed to connect to MongoDB:", error));

app.use("/api/events", fetchEvent);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


