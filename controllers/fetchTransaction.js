const axios = require("axios");

async function getTransactions(address) {
  try {
    const API_URL = `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&page=1&offset=10&sort=asc&apikey=${process.env.API_KEY}`;
    const response = await axios.get(API_URL);
    return response.data.result;
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch transactions");
  }
}

module.exports =  getTransactions;
