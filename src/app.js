const express = require("express");

const { adminAuth } = require("./middleware/auth");

const app = express();

// app.use("/home", (req, res) => {
//   res.send("Hi There ");
// });

// app.get("/user/:userid", (req, res) => {
//   res.send("This is new profile");
// });

// app.get("/profile/1", (req, res) => {
//   res.send("This is new profile");
// });
app.get("/admin/alldata", adminAuth, (req, res) => {
  res.send("This is admin daata");
});

// app.get("/profile", (req, res) => {
//   res.send("This is new profile");
// });

// app.use("/", (req, res) => {
//   res.send("Welcome to dashboard ");
// });

app.listen(3000, () => {
  console.log("Server is successfully listening on port 3000...");
});
