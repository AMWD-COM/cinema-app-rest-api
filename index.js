const express = require("express");
const app = express();
const mongoose = require("mongoose");
const actorsRouter = require("./routes/actors.routes");
const filmsRouter = require("./routes/films.routes");
require("dotenv").config();



const Port = process.env.PORT || 4000;
// express.json() is a middleware that parses the incoming request body and makes 
// it available on req.body
app.use(express.json());

// app.get("/", (req, res) => {
//   res.send("Server Connected on Port 3000");
// });

mongoose.connect(process.env.URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to MongoDB");
});


app.use('/actors', actorsRouter);
app.use("/films", filmsRouter);

app.listen(Port, () => console.log(`Server connected on port ${Port}`));
