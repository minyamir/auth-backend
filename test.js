import dotenv from "dotenv";
dotenv.config(); // Load .env

import express from "express";
import sendEmail from "./utils/sendEmail.js"; // Make sure this path is correct

const app = express();
app.use(express.json());

// Test route to send email
app.get("/send-test-email", async (req, res) => {
  try {
    await sendEmail({
      email: "your-email@gmail.com", // Replace with the email to receive test
      subject: "Test Nodemailer Email",
      message: "Hello! This is a test email sent from Node.js using Nodemailer.",
    });

    console.log("Email sent successfully!");
    res.send("Email sent successfully!");
  } catch (error) {
    console.error("Failed to send email:", error);
    res.status(500).send("Failed to send email: " + error.message);
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
