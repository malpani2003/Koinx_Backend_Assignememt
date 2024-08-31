const UserModel = require("../models/User");
const getTransactions = require("./fetchTransaction");

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
    res.json(transactions);
  } catch (error) { 
    res.status(500).json({ error: error.message });
  }
}

module.exports = { saveAndUpdateTransactions };
