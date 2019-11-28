const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const nodemailer = require("nodemailer");
require("dotenv").config();
// const { google } = require("googleapis");

const app = express();
// const OAuth2 = google.auth.OAuth2;

// const oauth2Client = new OAuth2(
//   process.env.CLIENT_ID,
//   process.env.CLIENT_SECRET,
//   "https://developers.google.com/oauthplayground"
// );

// oauth2Client.setCredentials({
//   refresh_token: process.env.REFRESH_TOKEN
// });

// const accessToken = oauth2Client.getAccessToken();

app.use(cors());
app.use(helmet());
app.use(express.json());

const auth = {
  type: "OAuth2",
  user: 'pere.solaclaver@gmail.com',
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  refreshToken: process.env.REFRESH_TOKEN
  // accessToken: accessToken
};

app.get("/", (req, res) => {
  res.status(200).json({ message: `Hello from dummy endpoint` });
});

app.post("/contact", (req, res) => {
  // Instantiate the SMTP server
  const smtpTrans = nodemailer.createTransport({
    service: "gmail",
    auth: auth
  });

  // Specify what the email will look like
  const mailOpts = {
    from: req.body.email, // This is ignored by Gmail
    to: 'pere.solaclaver@gmail.com',
    subject: "New message from contact form at peresola.com",
    // text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
    text: `this is a test email`
  };

  // Attempt to send the email
  smtpTrans.sendMail(mailOpts, (error, response) => {
    if (error) {
      console.log(error);
      // res.render("contact-failure"); // Show a page indicating failure
    } else {
      // res.render("contact-success"); // Show a page indicating success
      response.status(200).json({ message: `It worked` });
    }
  });
});

module.exports = app;
