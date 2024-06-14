const express = require("express");
const mongoose = require('mongoose');
const cors = require("cors");
const UsersModel = require('./models/Users');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://localhost:27017/ProductDekho", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log("Connected to the database");
}).catch((err) => {
  console.error("Failed to connect to the database", err);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  console.log("Received login request:", { email, password });

  UsersModel.findOne({ email: email })
    .then(user => {
      if (user) {
        console.log("User found:", user);
        if (user.password === password) {
          console.log("Password matches");
          res.json({ success: true, username: user.name });
        } else {
          console.log("Password does not match");
          res.json({ success: false, message: "The password is incorrect" });
        }
      } else {
        console.log("User not found");
        res.json({ success: false, message: "No record existed" });
      }
    })
    .catch(err => {
      console.error("Error during login", err);
      res.status(500).json({ success: false, message: "An error occurred" });
    });
});

app.post('/register', async (req, res) => {
  const { name, email, password } = req.body;

  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ message: "Password must contain at least one capital letter, one number, and one special character." });
  }

  try {
    const existingName = await UsersModel.findOne({ name });
    if (existingName) {
      return res.status(400).json({ message: "Username already exists" });
    }

    const existingEmail = await UsersModel.findOne({ email });
    if (existingEmail) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const newUser = await UsersModel.create(req.body);
    res.json(newUser);
  } catch (err) {
    console.error("Error during registration", err);
    res.status(500).json({ message: "An error occurred" });
  }
});

app.post('/check-name', (req, res) => {
  const { value } = req.body;
  UsersModel.findOne({ name: value })
    .then(user => res.json({ exists: !!user }))
    .catch(err => {
      console.error("Error checking name", err);
      res.status(500).json({ message: "An error occurred" });
    });
});

app.post('/check-email', (req, res) => {
  const { value } = req.body;
  UsersModel.findOne({ email: value })
    .then(user => res.json({ exists: !!user }))
    .catch(err => {
      console.error("Error checking email", err);
      res.status(500).json({ message: "An error occurred" });
    });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
