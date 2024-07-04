import express from "express";
import { verifyToken } from "./middlewares";
import cors from "cors";
import { getFirestore } from "firebase-admin/firestore";

const app = express();

app.use(cors());

export const admin = require("firebase-admin");

const serviceAccount = require("../test-auth-app-key.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = getFirestore();

app.get("/", verifyToken, (req, res) => {
  console.log("get...");
  res.json({ msg: "get...", user: req.user });
});

app.post("/", verifyToken, (req, res) => {
  console.log("post...");
  res.json({ msg: "post..." });
});

app.post("/authenticate", verifyToken, async (req, res) => {
  console.log("post...");

  const snapshot = await db
    .collection("users")
    .where("email", "==", req.user)
    .get();
  if (!snapshot.empty) {
    console.log(44);

    const userRecord = snapshot.docs[0].data();
    console.log({ userRecord });
    const { firstName } = userRecord;
  } else {
    console.log(48);

    const newUser = {
      email: req.user,
      firstName: "John ",
      lastName: "Doe",
    };

    await db.collection("users").add(newUser);
  }

  res.json({ msg: "post...", user: req.user });
});

app.post("/set-threshold", verifyToken, async (req, res) => {
  console.log(req.body);

  try {
    const snapshot = await db
      .collection("users")
      .where("email", "==", req.user)
      .get();

    if (!snapshot.empty) {
      console.log(44);

      const userDocRef = snapshot.docs[0].id;
      console.log({ userDocRef });

      const userRef = db.collection("users").doc(userDocRef);
      console.log({ userRef });

      const newThreshold = {
        index: "AAPL",
        threshold: "100",
        user: userRef,
      };

      await db.collection("thresholds").add(newThreshold);
    }

    res.status(200).send("Threshold set successfully");
  } catch (error) {
    res.status(500).json({ error });
  }
});

app.listen(4000, () => {
  console.log(`listening on 4000 ✅`);
});
