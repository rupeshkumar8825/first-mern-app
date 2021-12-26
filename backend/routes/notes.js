// in this making the endpoitns for the notes /api/notes 
const express = require("express");
const router = express.Router();

// now adding the routes to this endpoint 
router.get("/", (req, res) => {
    res.send("this is the endpoint for the notes api ");
});

// say everything went fine and export this to the other files as well 
module.exports = router;