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
  "mongodb+srv://mbahindah780:6NQPGHcDUzYtUs07@findambackend.lxp6rie.mongodb.net/"; // Replace with your connection string
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

// Define User schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  number: String,
  password: String,
});

const User = mongoose.model("User", userSchema);

// Create a route to handle signup
app.post("/signup", (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    number: req.body.number,
    password: req.body.password,
  });

  newUser
    .save()
    .then((user) => res.status(201).json(user))
    .catch((err) => res.status(400).json({ error: err.message }));
});

// Create a route to handle signin
app.post("/signin", (req, res) => {
  const { name, password } = req.body;

  User.findOne({ name, password })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ error: "Invalid credentials" });
      }
      res.status(200).json({ message: "Sign-in successful", user });
    })
    .catch((err) => res.status(500).json({ error: err.message }));
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
