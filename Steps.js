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


// .env file :
// PORT : 4000
// URL : mongodb://localhost:27017/test