import mongoose,{Schema} from "mongoose";

const adminSchema = new Schema({
    name: {
        type: String 
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
            type: String,
            required: [true, 'Password is required']
    },
    role: { 
        type: String, 
        enum: ["Admin", "DepartmentHead"],
        default: "Admin" },
        department: { 
        type: String 
    }
},
{
    timestamps: true,
});


export const Admin = mongoose.model("Admin", adminSchema)
