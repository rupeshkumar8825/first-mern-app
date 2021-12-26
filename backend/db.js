// in this we will write the code to connect the mongodb with the server 
const mongoose = require("mongoose");

// now calling the connect function for this purpose
// mongoose.connect("mongodb://localhost:27017/studentcombo", {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useFindAndModify: true,
//     useUnifiedTopology: true,

// }).then(() => {
//     console.log(`connection successful for the database `)
// }).catch((e) => {
//     console.log(`no connection`);
// });

mongoose.connect("mongodb://localhost:27017/studentNotebook").then(() => {
    console.log("connection successfull for the notebook database");
}).catch((e) => {
    console.log("no connection");
});