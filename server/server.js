var sslRedirect = require('heroku-ssl-redirect');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const mailgun = require('mailgun-js');

const app = express();

app.use(sslRedirect());
app.use(express.static(__dirname + '/../client/build'));
app.use(cors());
app.use(helmet());
app.use(express.json());

const DOMAIN = process.env.EMAIL_TOOL_DOMAIN;
const mg = mailgun({ apiKey: process.env.EMAIL_TOOL_API_KEY, domain: DOMAIN });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/../client/build/index.html');
  // res.status(200).json({ message: `dummy endpoint` });
});

app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;
  const data = {
    from: email,
    to: process.env.EMAIL_TEST_EMAIL,
    subject: `Contact form from ${name}`,
    text: message
  };
  mg.messages().send(data, function(error, body) {
    if (error) {
      res.status(500).json({
        message: `There was a problem sending the message. Try again.`
      });
    } else {
      res.status(200).json({ message: `Thanks, your message has been sent.` });
    }
  });
});

module.exports = app;
