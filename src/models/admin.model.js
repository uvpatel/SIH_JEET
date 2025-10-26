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
    role: { 
        type: String, 
        enum: ["Admin", "DepartmentHead"],
        default: "Admin" },
        department: { 
        type: String 
    },
    password: {
        type: String, 
        required: true 
    },
},
{
    timestamps: true,
});


export const Admin = mongoose.model("Admin", adminSchema)

