const express = require("express");
const app = express();
const mongoose = require("mongoose");
const actorController = require("./Controllers/actor.controller");
require("dotenv").config();
const Actor = require("./Models/acteur.model");
const Port = process.env.PORT || 4000;
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Server Connected on Port 3000");
});

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("open", () => {
  console.log("connected to database MongoDb");
});

app.use('/', actorController)


app.listen(Port, () => console.log(`Server connected on port ${Port}`));
