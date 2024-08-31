const Router = require('express').Router();

const {
  saveAndUpdateTransactions,
  getTotalExpenses,
} = require("../controllers/transactionControllers");

Router.get('/transactions/:address', saveAndUpdateTransactions);
Router.get("/expenses/:address", getTotalExpenses);

module.exports = Router;