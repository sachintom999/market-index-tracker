import express from "express";

const app = express();

app.get("/", (req, res) => {
  console.log(123);
  res.json({});
});

app.listen(4000, () => {
  console.log(`listening on 4000 ✅`);
});
