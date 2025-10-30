<<<<<<< HEAD
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

=======
git remote add origin https://github.com/uvpatel/SIH_JEET.git
git branch -M main
git push -u origin main



## Backend Class Management
```txt
.
├── Backend/
│   ├── src/
│   │   ├── app.js
│   │   ├── constants.js
│   │   ├── index.js
│   │   ├── db/
│   │   │   |── connection.db.js
│   │   ├── utils/
│   │   │   |── ApiError.utils.js
│   │   │   |── ApiResponse.utils.js
│   │   │   |── asyncHandler.utils.js
│   │   ├── routes/
│   │   │   └── helper.js
│   │   ├── controllers/
│   │   │   |── auth.controllers.js
│   │   │   |── student.controllers.js
│   │   │   |── subject.controllers.js
│   │   │   |── faculty.controllers.js
│   │   │   |── room.controllers.js
│   │   │   |── timetable.controllers.js
│   │   │   |── dashboard.controllers.js
│   │   │   |── .controllers.js
│   │   ├── middlewares/
│   │   │   |── 
│   │   │   |── 
│   │   ├── models/
│   │   │   |── admin.model.js
│   │   │   |── faculty.model.js
│   │   │   |── preference.model.js
│   │   │   |── room.model.js
│   │   │   |── student.model.js
│   │   │   |── subject.model.js
│   │   │   |── timetable.model.js
│   │   
│   │    
│   │       
│   ├── README.md
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── .gitignore
>>>>>>> b1a69bac652a0080bcb7b5f528acb4a9f2242c0f
```


next js