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
  const email = req.params.email;
  let filtered_users = users.filter((user) => user.email === email);
  if (filtered_users.length > 0) {
    let filtered_user = filtered_users[0];
    let DOB = req.query.DOB;
    //if the DOB has changed
    if (DOB) {
      filtered_user.DOB = DOB;
    }

    filtered_users.DOB = DOB;

    users = users.filter((user) => user.email != email);
    users.push(filtered_user);
    res.send(`User with the email  ${email} updated.`);
  } else {
    res.send("Unable to find user!");
  }
});

// DELETE request: Delete a user by email ID
router.delete("/:email", (req, res) => {
  const email = req.params.email;
  users = users.filter((user) => user.email != email);

  res.send(`User with the email  ${email} deleted.`);
});

module.exports = router;
