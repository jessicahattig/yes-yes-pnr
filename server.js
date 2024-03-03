
const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  // Configure the email transporter (use your SMTP server details)
  const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail', 'yahoo', etc.
    auth: {
      user: 'jessicahattig@gmail.com',
      pass: '546Snow$!#$',
    },
  });

  // Compose email
  const mailOptions = {
    from: 'your-email@example.com',
    to: 'recipient-email@example.com',
    subject: 'New Contact Form Submission',
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  // Send email
  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send('Email sent successfully');
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).send('Error sending email');
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
