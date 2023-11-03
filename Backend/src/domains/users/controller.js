//This holds all the functions related to a particular domain
//These functions will be exported to route and used there

//bcrypt will turn a password into a hashed value
const bcrypt = require("bcrypt");

// JSON web token is being used to implement forgot and reset password functionality
const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const hashPassword = async (password) => {
  try {
    const hash = await bcrypt.hash(password, 10);

    return hash;
  } catch (error) {
    return error;
  }
};

//This function will sent an email to the user email address with the link to reset password
const forgotPassword = async (emailAddress, userId) => {
  const token = jwt.sign({ id: userId }, "msi-ecommerce-application", {
    expiresIn: "1d",
  });

  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "sharyar.anwer0009@gmail.com",
      pass: "eteh vuja zeuj kwya",
    },
  });

  var mailOptions = {
    from: "sharyar.anwer0009@gmail.com",
    to: emailAddress,
    subject: "Reset Your Password",
    text: `That was easy! Click on this link: http://localhost:5173/reset-password/${userId}/${token}`,
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        reject(error);
      } else {
        resolve(info.response);
      }
    });
  });
};

//This function will run when user want to update the password. This will verify the user token
const verifyToken = async (token) => {

  try {

    const decodedToken = await jwt.verify(token, "msi-ecommerce-application");

    return {status: "Verified"};

  } catch (err) {

    // Handle the error here.
    return { status: "Unverified" };
    
  }

};

module.exports = { hashPassword, forgotPassword, verifyToken };
