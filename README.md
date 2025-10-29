admin.model.ts
```ts
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

```
faculty.model.ts
```ts
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
    password: {
            type: String,
            required: [true, 'Password is required']
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


```
room.models.ts

```ts
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

export const Room = mongoose.model("Room", roomSchema);
```

student
```ts
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


export const Student = mongoose.model("Student", studentSchema);


```

subject.models.ts
```ts
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

export const Room = mongoose.model("Room", roomSchema);
```


timetable.model.ts
```ts
// student.model.js
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


export const Student = mongoose.model("Student", studentSchema);

```