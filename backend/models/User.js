// in this we will define the schema for the user database 
const mongoose = require("mongoose");

// defining the schema for the student 
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: email,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});


// now we have to use this schema to be used then we have to export the schema to the other files 
// say everything went fine 
module.exports = mongoose.model("user", UserSchema);