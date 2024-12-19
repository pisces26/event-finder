import mongoose from "mongoose";
import EventModel from "../models/Event.js"; 

const DBEventsData = [
  {
    title: "Musically Yours",
    events: [
      {
        title: "Rahul Deshpande Collective",
        date: "Sun, 10 Nov",
        location: "Pimpri Chinchwad, Pune",
        price: "Rs. 500 onwards",
        image: "/Assets/RahulDeshpande.jpg",
        category: "Musically Yours",
      },
    ],
  },
  {
    title: "Comedy Central",
    events: [
      {
        title: "Samay Raina",
        date: "Sun, 10 Nov",
        location: "FC Road, Pune",
        price: "Rs. 500 onwards",
        image: "/Assets/SamayRaina.png",
        category: "Comedy Central",
      },
    ],
  },
  {
    title: "Drama and Delight",
    events: [
      {
        title: "Mughal-E-Azam",
        date: "Sun, 10 Nov",
        location: "Kothrud, Pune",
        price: "Rs. 500 onwards",
        image: "/Assets/DramaDelight.jpg",
        category: "Drama and Delight",
      },
    ],
  },
];


const seedDatabase = async () => {
  try {
    // Step 1: Connect to MongoDB
    await mongoose.connect("mongodb://127.0.0.1:27017/test", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to MongoDB");

    // Step 2: Clear existing data
    await EventModel.deleteMany({});
    console.log("Cleared existing events");

    // Step 3: Prepare and insert new data
    const allEvents = DBEventsData.flatMap((category) =>
      category.events.map((events) => ({
        ...events,
        category: category.title,
      }))
    );
    
    console.log("Processed Events Data:", allEvents);

    try {
      const insertedEvents = await EventModel.insertMany(allEvents);
      console.log(`Inserted ${insertedEvents.length} events into the database`);
    } catch (error) {
      console.error("Error inserting events:", error);
    }

    // Step 4: Disconnect from MongoDB
    // await mongoose.disconnect();
    // console.log("Disconnected from MongoDB");
  } catch (error) {
    console.error("Error seeding the database:", error.message);
    process.exit(1);
  }
};

seedDatabase();


