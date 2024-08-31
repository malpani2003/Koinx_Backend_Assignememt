const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  address: String,
  transactions: [
    {
      hash: String,
      blockNumber: Number,
      timeStamp: Date,
      from: String,
      to: String,
      value: Number,
      gasUsed: Number,
      gasPrice: Number,
      nonce: String,
      blockHash:String,
      transactionIndex:String
    },
  ], // Array of data
});

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;
