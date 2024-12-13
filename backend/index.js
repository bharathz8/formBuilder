import express from "express";
import { connectToDB } from "./database.js";
import { Form } from "./models/form.js";

const app = express();
app.use(express.json());

// Router
const router = express.Router();

// Create a new form
router.post("/forms", async (req, res) => {
  try {
    const newForm = new Form(req.body); // Validate req.body structure to match schema
    const savedForm = await newForm.save();
    res.status(201).json(savedForm);
  } catch (error) {
    console.error("Error creating form:", error.message);
    res.status(500).json({ message: "Error creating form", error: error.message });
  }
});

// Use the router
app.use(router);

// Start the server
const startServer = async () => {
  await connectToDB(); // Ensure DB connection is established before listening
  app.listen(3000, () => {
    console.log("Server running on port 3000");
  });
};

startServer();

export default router;
