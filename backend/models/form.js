import mongoose from 'mongoose';

// Option Schema for flexible option handling
const OptionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  isCorrect: { type: Boolean, default: false }, // Useful for comprehension
  category: { type: String }, // For categorize questions
});

// Question Schema
const QuestionSchema = new mongoose.Schema({
  questionText: { type: String, required: true },
  questionType: {
    type: String,
    required: true,
    enum: ["categorize", "cloze", "comprehension"],
  },
  options: [OptionSchema], // Shared options for all types
  clozeAnswers: [{ position: Number, answer: String }], // For cloze questions
  passage: { type: String }, // For comprehension questions
  categories: [String], // Possible categories for categorize questions
  mcqQuestions: [
    {
      questionText: { type: String, required: true },
      options: [OptionSchema],
    },
  ], // For comprehension MCQs
  image: { type: String }, // Optional image
});

// Form Schema
const FormSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    headerImage: { type: String },
    description: { type: String }, // Optional form description
    questions: [QuestionSchema],
  },
  { timestamps: true }
);

// Model Export
export const Form = mongoose.model("Form", FormSchema);
