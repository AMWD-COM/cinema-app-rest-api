//  fullStack appication steps :
//  1. Create a new folder for front-end: npm init vite@latest front 
// 2. Create a new folder for back-end: npm init => package.json


//  if we start developing back-end :
// 1. index.js : (luch server , connection a mongoDB)
// 2. create Models , routers , controllers
// To Create a server with Express : 
//  install express : 
// npm i express
// npm install mongoose 
// npm install dotenv
//  require("dotenv").config();

// Connextion with MongoDb 
//  const mongooose = require("mongoose");
// mongooose.connect( process.env.URL , {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// }).then (() => { console.log("Connected to MongoDB")});


// Start the server : 
// const express = require("express");
// const app = express();
// app.listen(process.env.PORT , () => console.log("Server connected on port 4000"));

// app.use(express.json());

// .env file :
// PORT = 4000
// URL = mongodb://localhost:27017/exercices

// Modeles :
// 1. Student.model.js : Schema for student (id,firstname,lastName,group) + create the collection 
//  const mongoose = require("mongoose");
//  const Schema = mongoose.Schema;
//  const studentSchema = new Schema({
//     firstName: String,
//     lastName: String,
//     group: String
//  });
// create the collection :
//  const Student = mongoose.model("Student", studentSchema);
// module.exports = Student;

// 2.Exo.model.js : Schema for exo (id,title,description,date,duration,level) + collection 
//  const mongoose = require("mongoose");
//  const Schema = mongoose.Schema;
//  const exoSchema = new Schema({
    // guid:Number,
//     title: {
//         type: String,
//         required: true,
// },
//     description: String, 
//     date: Date,
//     duration: Number,
//     level: String,
//     students: [{type: Schema.Types.ObjectId, ref: "Student"}]
//  });


// Controllers :
// 1. StudentsController.js : CRUD for students
// const StudentController={}
// module.exports = StudentController;


// routers
// 1. StudentsRouter.js : routes for students


// Front :