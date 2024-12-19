import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
// import mongoose from 'mongoose';
dotenv.config();
import {userRegister} from './routes/registration.js';
import {adminRegister} from './routes/adminRegistration.js';
import { dbConnector } from './database.js';
import { userLogin } from './routes/userLogin.js';
import { adminLogin } from './routes/adminLogin.js';

// import router from './routes/events.js'; 
import eventRoutes from "./routes/fetchEvent.js";
// const MONGO_URI = "mongodb://localhost:27017/eventDatabase";


const app = express();
const port = 3001;


app.use("/api/Event", eventRoutes); 


app.use(
  cors({
    credentials: true,
    origin: ["http://localhost:3000", "http://192.168.1.6:3000"],
  })
);

// Middleware to parse JSON request body
app.use(express.json());

// Connect to MongoDB
dbConnector();
// POST route for user registration
app.post("/register", userRegister);

// POST route for user login
app.post("/login", userLogin);

// POST route for admin registration
app.post("/AdminSignup", adminRegister);

// POST route for admin login
app.post("/AdminLogin", adminLogin);


// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
