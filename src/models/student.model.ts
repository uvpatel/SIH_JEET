// student.model.ts
import mongoose, { Schema } from "mongoose";

// Define the student schema
const studentSchema = new Schema({
    name: { 
    type: String, 
    required: true, 
    trim: true 
    },
    rollNumber: { 
        type: String, 
        required: true, 
        unique: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    branch: { 
        type: String, 
        required: true 
    },
    year: { 
        type: Number, 
        required: true 
    },
    section: { 
        type: String 
    },
    password: {
            type: String,
            required: [true, 'Password is required']
    },
    subjects:
        [{ type: Schema.Types.ObjectId,
            ref: "Subject"
        }],
},
{timestamps: true});


export const Student =
  mongoose.models.Student || mongoose.model("Student", studentSchema);
