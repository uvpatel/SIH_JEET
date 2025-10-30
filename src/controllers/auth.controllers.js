/*

registerUser      // Register admin/faculty
loginUser         // Authenticate & return JWT
getProfile        // Return logged-in user info
updatePassword    // Change password
logoutUser        // Optional if using sessions

*/

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.utils.js";
import { Student } from "../models/student.model.js";
import { ApiResponse } from "../utils/ApiResponse.utils.js";
import jwt from "jsonwebtoken"
import mongoose from "mongoose";



const registerStudent = asyncHandler( async (req,res) => {
    // step 1: get student details from frontend


    const {name , rollNumber, email , branch ,year} = req.body
    // validation - not empty
    
})
