const Router = require('express').Router();

const {saveAndUpdateTransactions} = require('../controllers/transactionControllers');

Router.get('/transactions/:address', saveAndUpdateTransactions);


module.exports = Router;