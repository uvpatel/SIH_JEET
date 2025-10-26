import mongoose, { Schema } from "mongoose";



const facultySchema = new Schema({
    name: {
        type: String, 
        required: true
    },
    facultyId: {
        type: String,
        required: true,
        unique: true 
    },
    email: { 
        type: String,
        required: true,
        unique: true },
    department: { 
        type: String
    },
    availableDays: [String], // e.g., ["Mon", "Tue", "Wed"]
    availableSlots: [String], // e.g., ["9AM-10AM", "10AM-11AM"]
    maxLoad: { 
        type: Number,
        default: 20 
    }, // hours per week
    assignedSubjects:
     [
        { 
            type: Schema.Types.ObjectId, 
            ref: "Subject" 
        }
     ],
}, {timestamps: true});

export const Faculty = mongoose.model("Faculty", facultySchema);










