// similarly making the schema for the notes 
const mongoose = require("mongoose");

// defining the schema for the notes app 
const NotesSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    tag: {
        type: String,
        default: "General"
    },
    date: {
        type: Date,
        default: Date.now
    }
});

// now we have to create the model and export it as well 
// say everything went fine 
module.exports = mongoose.model("notes", NotesSchema);