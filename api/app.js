const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const User = require("./models/Users");

const app = express();

app.use(
  cors({
    credentials: true, // This is the key part for handling credentials
    origin: "http://localhost:5173",
  })
);
app.use(express.json());
app.use(cookieParser);

mongoose.connect(process.env.MONGO_URL);
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

app.get("/profile", (req, res) => {
  const { token } = req.cookies;
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, {}, (err, userInfo) => {
      if (err) throw err;
      return res.status(200).json(userInfo);
    });
  } else {
    res.status(401).json({ message: "not auth" });
  }
});

app.post("/register", async (req, res) => {
  console.log(req.body);
  const { username, password } = req.body;

  try {
    const UserDoc = await User.create({
      username,
      password: bcrypt.hashSync(password, salt),
    });
    res.json(UserDoc);
  } catch (e) {
    res.status(400).json(e);
  }
});

app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  const userDoc = await User.findOne({ username });
  const success = bcrypt.compareSync(password, userDoc.password);

  if (success) {
    jwt.sign(
      { username, user_id: userDoc._id },
      process.env.JWT_KEY,
      {},
      (err, token) => {
        if (err) throw err;

        res.cookie("token", token).json({
          username,
          user_id: userDoc._id,
        });
      }
    );
  } else {
    res.status(400).json("Wrong credentials");
  }
});
app.listen(8081);
//, () => {
//   console.log("Server is running on port 8081");
// });
