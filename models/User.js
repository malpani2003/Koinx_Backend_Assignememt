const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  address: String,
  transactions:Array, // Array of data
},{timestamps:true});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
