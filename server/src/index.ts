import express from "express";
import { verifyToken } from "./middlewares";
import cors from "cors"

const app = express();

app.use(cors())



export const admin = require("firebase-admin");

const serviceAccount = require("../test-auth-app-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});




app.get("/", verifyToken ,(req, res) => {
  console.log("get...");
  res.json({msg:"get...",user:req.user});
});

app.post("/", verifyToken ,(req, res) => {
  console.log("post...");
  res.json({msg:"post..."});
});

app.post("/authenticate", verifyToken ,(req, res) => {
  console.log("post...");
  res.json({msg:"post...",user:req.user});
});




app.listen(4000, () => {
  console.log(`listening on 4000 ✅`);
});
