// this is the routing for the authorisation 
const express = require("express");
const { body, validationResult } = require("express-validator");
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
// also adding the validator for this database 
router.post("/", [
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password is length is too small").isLength({ min: 5 }),
], (req, res) => {

    // grabbing the errors by passing the details of the req.body via the validators 
    const errors = validationResult(req);

    // applying the if else statement for this purpose 
    if (!errors.isEmpty()) {
        // then this has some of the validation errors in the data of the user that he is entering 
        return res.status(400).json({ errors: errors.array() });
    }

    console.log("creating the new user to be stored in the website ");
    console.log(req.body);
    // const user = await new User(req.body);
    // using the promises to create the new user for this database 
    User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email
    }).then(user => res.json(user)).catch(err => {
        console.log(err)
        res.json({ error: `Please enter a unique value for email` })
    });



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