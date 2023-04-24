// server.js
const User = require("./src/User.model");
const express = require("express");
const app = express();
const connectDb = require("./src/connection");
const cors = require("cors");

const PORT = 8080;

app.use(cors());

app.get("/users", async (req, res) => {
  const users = await User.find();

  res.json(users);
});

app.get("/user-create", async (req, res) => {
  const user = new User({ username: "userTest" });

  await user.save().then(() => console.log("User created"));

  res.send("User 123 created \n");
});

app.get("/", (req, res) => {
  res.send("Hello 222Node.js jahahaha app \n");
});

app.listen(PORT, function () {
  console.log(`Listening on ${PORT}`);

  connectDb()
    .then(() => {
      console.log("MongoDb connected");
    })
    .catch((e) => console.log("MongoDb connected Error", e));
});
