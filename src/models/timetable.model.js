import mongoose from "mongoose";

const timetableSchema = new Schema({
    classId: { 
    type: String, 
    required: true
   }, // e.g., "CSE-3A"
    week: { 
    type: Number, 
    default: 1 
    },
    schedule: [
    {
        day: { 
            type: String },
        slot: { 
            type: String },
        subject: { 
            type: Schema.Types.ObjectId, 
            ref: "Subject" 
        },
        faculty: { 
            type: Schema.Types.ObjectId, 
            ref: "Faculty" 
        },
        room: { 
            type: Schema.Types.ObjectId,
            ref: "Room" 
        },
    },
    ],
});

export const Timetable = mongoose.model("Timetable", timetableSchema)