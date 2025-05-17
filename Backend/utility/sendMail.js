const nodemailer = require("nodemailer");
require('dotenv').config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });


  // Verify the transporter configuration
  
transporter.verify((error, success) => {
    if (error) {
      console.error("Error configuring mail transporter:", error);
    } else {
      console.log("Mailer is ready to send emails");
    }
  });

  module.exports = transporter;

