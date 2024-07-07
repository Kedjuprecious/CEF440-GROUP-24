// server.js

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
const dbURI =
  "mongodb+srv://mbahindah780:6NQPGHcDUzYtUs07@findambackend.lxp6rie.mongodb.net/"; 
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define Report schema
const reportSchema = new mongoose.Schema({
  name: String,
  description: String,
  location: String,
  image: String,
});

const Report = mongoose.model("Report", reportSchema);

// Create a route to handle report submission
app.post("/report", (req, res) => {
  const newReport = new Report({
    name: req.body.name,
    description: req.body.description,
    location: req.body.location,
    image: req.body.image,
  });

  newReport
    .save()
    .then((report) => res.status(201).json(report))
    .catch((err) => res.status(400).json({ error: err.message }));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
