const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config();
const mailgun = require('mailgun-js');

const app = express();

app.use(express.static(__dirname + '/client/build'));
app.use(cors());
app.use(helmet());
app.use(express.json());

const DOMAIN = process.env.EMAIL_TOOL_DOMAIN;
const mg = mailgun({ apiKey: process.env.EMAIL_TOOL_API_KEY, domain: DOMAIN });

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client/build/index.html');
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
      console.log(error);
    } else {
      res.status(200).json({ message: `yay` });
    }
  });
});

module.exports = app;
