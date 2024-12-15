import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();
import {userRegister} from './routes/registration.js';
import { dbConnector } from './database.js';
const app = express();
const port = 3001;

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

// Start the server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
