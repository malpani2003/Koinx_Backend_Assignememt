const Router = require('express').Router();

const {
  saveAndUpdateTransactions,
  getTotalExpenses,
} = require("../controllers/transactionControllers");
Router.get("/home", (req, res) => {
  res.send("Welcome to the Transactions API");
});
Router.get('/transactions/:address', saveAndUpdateTransactions);
Router.get("/expenses/:address", getTotalExpenses);

module.exports = Router;
