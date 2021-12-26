const express = require('express');
const app = express();
// this is the backend for the notebook application 
require("./db.js");
const port = 8000;

// creating the routes for the various end points of the application 
app.get("/", (req, res) => {
    console.log("the user has hit the root endpoint");
    res.send("hi this is the backend developer. You have hit the root endpoint successfully");
});


// now creating the server to be hosted upon 
app.listen(port, () => {
    console.log(`litening to the port with the port no ${port}`);
});