const UserModel = require("../models/User");
const getTransactions = require("../helper/fetchTransaction");
const getEthereumPrice = require("../helper/fetchEthereumPrice");

async function saveAndUpdateTransactions(req, res) {
  const { address } = req.params;
  try {
    const transactions = await getTransactions(address);
    // console.log(transactions)
    const updatedUser = await UserModel.findOneAndUpdate(
      { address },
      { transactions },
      { new: true, upsert: true }
    );
    res.status(200).json(transactions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

async function getTotalExpenses(req, res) {
  const { address } = req.params;
  try {
    const { transactions } = await UserModel.findOne({ address: address });
    const lastestPrice = await getEthereumPrice();

    let totalExpenses = 0;
    transactions.forEach((element) => {
      totalExpenses += (element.gasPrice * element.gasPrice) / 1e18;
    });

    res.status(200).json({
      totalExpenses,
      currentPrice: lastestPrice,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

module.exports = { saveAndUpdateTransactions, getTotalExpenses };
