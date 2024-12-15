import mongoose from "mongoose";
import dotenv from 'dotenv';
dotenv.config();


export const dbConnector = async () => {

  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
  }