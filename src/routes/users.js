const express = require("express");
const router = express.Router();

let users = [
  {
    firstName: "John",
    lastName: "wick",
    email: "johnwick@gamil.com",
    DOB: "22-01-1990",
  },
  {
    firstName: "John",
    lastName: "smith",
    email: "johnsmith@gamil.com",
    DOB: "21-07-1983",
  },
  {
    firstName: "Joyal",
    lastName: "white",
    email: "joyalwhite@gamil.com",
    DOB: "21-03-1989",
  },
];

// GET request: Retrieve all users
router.get("/", (req, res) => {
  // Copy the code here
  res.send(users); //This line is to be replaced with actual return value
});

// GET by specific ID request: Retrieve a single user with email ID
router.get("/:email", (req, res) => {
  // Copy the code here
  const email = req.params.email;

  const result = users.find((user) => user.email === email);
  if (result) {
    res.send(result);
  } else {
    res.status(404).send({ message: "User not found" });
  }
});

// POST request: Create a new user
router.post("/", (req, res) => {
  const { firstName, lastName, email, DOB } = req.body;

  if (users.find((user) => user.email === email)) {
    res.status(400).send({ message: "User already exists" });
  }

  users.push({ firstName, lastName, email, DOB });
  res.status(200).send({ message: "User created successfully" });
});

// PUT request: Update the details of a user by email ID
router.put("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented"); //This line is to be replaced with actual return value
});

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  // Copy the code here
  res.send("Yet to be implemented"); //This line is to be replaced with actual return value
});

module.exports = router;
