const mongoose = require("mongoose");

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { require: true, type: String, min: 3, unique: true },
  password: { require: true, type: String, min: 6 },
});

const UserModel = model("User", userSchema);

module.exports = UserModel;
