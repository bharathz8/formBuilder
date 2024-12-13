import mongoose from "mongoose";

export async function connectToDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/formBuilder', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      connectTimeoutMS: 30000, // Increase timeout
    });
    console.log("Connected to MongoDB successfully");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1); // Exit process if unable to connect
  }
}

