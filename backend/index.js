const express = require('express');
const app = express();
const bp = require("body-parser");
// this is the backend for the notebook application 
require("./db.js");
const port = 8000;

// if we want to use the req.body then we have to use the following middleware 
app.use(bp.json());

// the available routes 
// now we have to create the route for the website 
// we will make the another folder for the routing purpose 
app.use("/api/auth", require('./routes/auth'));
app.use("/api/notes", require("./routes/notes"));

// creating the routes for the various end points of the application 
app.get("/", (req, res) => {
    console.log("the user has hit the root endpoint");
    res.send("hi this is the backend developer. You have hit the root endpoint successfully");
});


// now creating the server to be hosted upon 
app.listen(port, () => {
    console.log(`litening to the port with the port no ${port}`);
});