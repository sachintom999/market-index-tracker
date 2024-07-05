import axios from "axios";
import { db } from "..";
import { sendEmailNotification } from "./emails";

const POLYGON_API_KEY = process.env.POLYGON_API_KEY;

// const axios = require('axios');

// const API_KEY = 'API_KEY';

// const checkAndSendAlerts = async () => {
//   const thresholdsSnapshot = await db.ref('thresholds').once('value');
//   if (thresholdsSnapshot.exists()) {
//     const thresholds = thresholdsSnapshot.val();
//     for (const userId in thresholds) {
//       for (const index in thresholds[userId]) {
//         const { threshold, email } = thresholds[userId][index];
//         const response = await axios.get(`https://polygon.io/api/v1/quote?symbol=${index}&token=${API_KEY}`);
//         const currentPrice = response.data.c;

//         if (currentPrice >= threshold) {
//           sendEmailNotification(email, index, currentPrice);
//         }
//       }
//     }
//   }
// };

export const qq = async () => {
  const userRef = db.collection("userData");
  const snapshot = await userRef.get();
  if (snapshot.empty) {
    console.log("No matching documents.");
    return;
  }

  snapshot.forEach((doc) => {
    const data = doc.data();
    const { email, thresholds } = data;

    for (const threshold of thresholds) {
      const { index, type, value } = threshold;

      const url = `https://api.polygon.io/v2/aggs/ticker/${index}/prev?adjusted=true&apiKey=${POLYGON_API_KEY}`;

      axios.get(url).then((response) => {
        const currentPrice = response.data.results[0].c;
        console.log({ currentPrice });

        if (
          (type == "above" && currentPrice >= value) ||
          (type == "below" && currentPrice < value)
        ) {
          sendEmailNotification(email, index, value);
        }
      });
    }
  });
};




async function sample(email: string, thresholds: any) {
  for (const threshold of thresholds) {
    const { index, type, value } = threshold;

    const url = `https://api.polygon.io/v2/aggs/ticker/${index}/prev?adjusted=true&apiKey=${POLYGON_API_KEY}`;
    const response = await axios.get(url);
    const currentPrice = response.data.results[0].c;

    if (
      (type == "above" && currentPrice >= value) ||
      (type == "below" && currentPrice < value)
    ) {
      sendEmailNotification(email, index, value);
    }
  }
}

async function sampleOld(email: string, thresholds: any) {
  for (const threshold of thresholds) {
    const { index, type, value } = threshold;

    const url = `https://api.polygon.io/v2/aggs/ticker/${index}/prev?adjusted=true&apiKey=${POLYGON_API_KEY}`;
    const response = await axios.get(url);
    const currentPrice = response.data.results[0].c;

    if (
      (type == "above" && currentPrice >= value) ||
      (type == "below" && currentPrice < value)
    ) {
      sendEmailNotification(email, index, value);
    }
  }
}

// module.exports = { checkAndSendAlerts };
