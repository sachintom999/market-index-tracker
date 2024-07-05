import express from "express";
import { verifyToken } from "./middlewares";
import cors from "cors";
import { getFirestore } from "firebase-admin/firestore";
import { addThreshold, addUserData, getUserData } from "./db";
import axios from "axios";

import { alertRoutes, authRoutes } from "./routes";
import { setThreshold } from "./controllers/alertsController";

require("dotenv").config();

const app = express();
const cron = require("node-cron");

export const admin = require("firebase-admin");
const serviceAccount = require("../test-auth-app-key.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const db = getFirestore();

app.use(cors());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/alerts", alertRoutes);




app.post("/set-threshold", verifyToken, setThreshold);



app.post("/test", verifyToken, async (req, res) => {
  // await addUserData("2@gmail.com","22")
  // await addThreshold("1@gmail.com", {index:"META",type:"below",value:"11000"})
  // await getUserData("122@gmail.com")
  // await qq()

  // const url = `https://api.polygon.io/v2/aggs/ticker/META/prev?adjusted=true&apiKey=LrX76XnH3BijtRSlMcg9UTZ5l9AKhPtt`;

  // axios.get(url).then((response) => {
  //   const currentPrice = response.data.results[0].c;
  //   console.log({ currentPrice });
  // });

  // const response = await axios.get(url)
  // const data = response.data.results[0].c
  // console.log({data})
  const email = req.user;
  console.log({email})
  const qq = await getUserData(email)
  console.log({qq})

  const {thresholds} = qq
  console.log({thresholds})
  const indexThresolds = thresholds.filter(t => t.index === 'ITC')
  console.log({indexThresolds})

  res.json({ msg: "success" });
});





cron.schedule("0 0 * * *", () => {
  // checkAndSendAlerts();
});





app.listen(4000, () => {
  console.log(`listening on 4000 ✅`);
});
