import mongoose, {Schema} from "mongoose";

const roomSchema = new Schema({
  roomNumber: {
    type: String,
    required: true, 
    unique: true },
  capacity: {
    type: Number,
    required: true },
  type: {
    type: String,
    enum: ["Lecture Hall", "Lab", "Seminar Hall"],
    default: "Lecture Hall" },
  availability: {
    days: [String],
    slots: [String],
  },
}, {timestamps: true});

export const Room =
  mongoose.models.Room || mongoose.model("Room", roomSchema);
