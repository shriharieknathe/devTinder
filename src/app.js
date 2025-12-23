const express = require("express");

const app = express();

app.use("/home", (req, res) => {
  res.send("Hi There ");
});

app.use("/profile", (req, res) => {
  res.send("This is new profile");
});

app.use("/", (req, res) => {
  res.send("Welcome to dashboard ");
});

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
