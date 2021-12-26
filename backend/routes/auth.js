// this is the routing for the authorisation 
const express = require("express");
const router = express.Router();
const User = require("../models/User");

// now we can write the route for this end point /api/auth 
router.get("/", (req, res) => {
    // const obj = {
    //     name: "Rupesh Kumar",
    //     email: "rk763130@gmail.com"
    // };
    console.log(req.body);
    // passing  this information to the endpoint 
    res.send(req.body);
});

// adding the post request for creating the yser 
router.post("/", (req, res) => {
    console.log("creating the new user to be stored in the website ");
    console.log(req.body);
    const user = new User(req.body);

    // saving this  to the database 
    user.save();
    res.send(user);
})


// endpoint to create the new user or add the new user in the database 
// router.post("/", (req, res) => {
//     console.log("adding the new user to the database ");

//     const user = new User(req.body);
//     // now we have to save this to the database that we have right now 
//     user.save();
//     console.log("the user has been successfully added to the database");
//     console.log(req.body);
//     res.send(req.body);
// })
// we also hav,e to export this to be used to other files as well 
module.exports = router