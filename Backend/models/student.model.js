const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
    fullName: {type: String, required: true},
    userName: {type: String, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true, minlength: 8},
    profilePic: {type: String},
    gender: {type: String, required: true, enum: ["male", "female"]},
    permissionType: {type: String, required: true, enum: ["Student", "Teacher"]},
    date: {type: Date, createdAt: Date.now()}
}, {timestamps: true})

const Student = mongoose.model('Student', studentSchema);
module.exports = {Student}