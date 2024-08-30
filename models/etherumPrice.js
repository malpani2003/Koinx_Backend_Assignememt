const mongoose = require("mongoose");

const priceSchema = new mongoose.Schema(
  {
    price: Number,
  },
  { timestamps: true }
);

const EthereumPrice = new mongoose.model("EthereumPrice", priceSchema);
module.exports = EthereumPrice;
