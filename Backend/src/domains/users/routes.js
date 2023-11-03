// This will hold all the particular routes related to users

const express = require("express");

const router = express.Router();

const User = require("./model"); // Import the User model from your model.js

//This is function used to hash the password before entering it in the database
const hashPassword = require("./controller").hashPassword;

//This is function used to hash the password before entering it in the database
const forgotPassword = require("./controller").forgotPassword;

//This is used to verify the token which the user sends when he forgets and wants to reset the password
const verifyToken = require("./controller").verifyToken;

//This API is used to create and a new user to the database
router.post("/create-user", async (req, res) => {
  try {
    // Extract user data from the request body
    let { emailAddress, password } = req.body;

    password = await hashPassword(password);

    User.create({ emailAddress, password })
      .then((response) => {
        res
          .status(201)
          .json({ message: "User registration successful", response });
      })
      .catch((err) => {
        res.status(201).json({
          message: "We cannot register at the moment. Please try again later.",
          err: err.message,
        });
      });
  } catch (error) {
    console.error(error);

    res.status(500).json({ message: "An error occurred during registration" });
  }
});

//This api will send an email to the user email address. The email contain link to reset the password.
router.post("/forgot-password", async (req, res) => {
  const { emailAddress } = req.body;

  User.findOne({ emailAddress: emailAddress }).then(async (user) => {
    if (!user) {
      return res.send({
        message: "User with this email address does not exist",
      });
    } else {
      const response = await forgotPassword(emailAddress, user._id);

      return res.status(201).json({
        user: user,
        response: response,
      });
    }
  });
});

//This API will reset the password in the database
router.post("/reset-password/:id/:token", async (req, res) => {
  const { id, token } = req.params;

  const password = req.body;

  const tokenCorrect = await verifyToken(token);

  if (tokenCorrect.status == "Verified") {

    const hashedPassword = await hashPassword(password);

    User.findByIdAndUpdate({ _id: id }, { password: hashedPassword })
      .then((user) => {

        res.json({ status: "Password updated successfully!", user: user });

      })
      .catch((err) => {
        res.json({

          status:
            "There was a problem in updating your password. Please try again later",
          error: err,

        });
      });
  } else {

    return res.json({ status: "Error with the token" });

  }

});

module.exports = router;
