import mongoose from "mongoose";

export const dbConnector = async () => {
  if (mongoose.connections[0].readyState) {
    return;
  }
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    throw error;
  }
};