import dotenv from "dotenv";
dotenv.config();

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async ({ email, subject, message }) => {
  try {
    await resend.emails.send({
      from: "Mini 9 <minyamirkelemu12@gmail.com>", // VERIFIED Gmail
      to: email,
      subject,
      text: message,
    });

    console.log("Email sent successfully with Resend");
  } catch (error) {
    console.error("Resend email error:", error);
  }
};

export default sendEmail;
