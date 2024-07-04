const { db } = require('../firebase/admin');
const axios = require('axios');
const nodemailer = require('nodemailer');

const API_KEY = 'API_KEY';

const checkAndSendAlerts = async () => {
  const thresholdsSnapshot = await db.ref('thresholds').once('value');
  if (thresholdsSnapshot.exists()) {
    const thresholds = thresholdsSnapshot.val();
    for (const userId in thresholds) {
      for (const index in thresholds[userId]) {
        const { threshold, email } = thresholds[userId][index];
        const response = await axios.get(`https://polygon.io/api/v1/quote?symbol=${index}&token=${API_KEY}`);
        const currentPrice = response.data.c;

        if (currentPrice >= threshold) {
          sendEmailNotification(email, index, currentPrice);
        }
      }
    }
  }
};

const sendEmailNotification = (email, index, currentPrice) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'your-email@gmail.com',
      pass: 'your-email-password',
    },
  });

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: email,
    subject: `Stock Alert for ${index}`,
    text: `The current price of ${index} is ${currentPrice}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });
};

module.exports = { checkAndSendAlerts, saveUserThreshold };
