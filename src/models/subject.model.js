// student.model.js
import mongoose, { Schema } from "mongoose";

// Define the student schema
const subjectSchema = new Schema(
    {
        name: {
            type: String,
            required: true
        },
        code: { 
            type: String, 
            required: true, 
            unique: true
        },
        department: { 
            type: String
        },
        semester: {
            type: Number 
        },
        credits: {
            type: Number 
        },
        type: {
            type: String, 
            enum: ["Theory", "Lab"],
            default: "Theory" 
        },
 },
 {
    timestamps: true
 }
);

// Create and export model
export const Subject = mongoose.model("Subject", subjectSchema);