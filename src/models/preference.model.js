import mongoose, {Schema} from "mongoose";

const preferenceSchema = new Schema({
    faculty: {
        type: Schema.Types.ObjectId,
        ref: "Faculty" 
},
    preferredDays: [String],
    preferredSlots: [String],
    unavailableDays: [String],
    remarks: String,
}, {timestamps: true});

export const Preference = mongoose.model("Preference" , preferenceSchema)