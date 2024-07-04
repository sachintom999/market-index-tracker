import { sendEmailNotification } from "./emails";

const { db } = require('../firebase/admin');
const axios = require('axios');

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



module.exports = { checkAndSendAlerts };
