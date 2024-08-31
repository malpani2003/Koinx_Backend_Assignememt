const axios = require('axios');

const url = 'https://api.coingecko.com/api/v3/simple/price?ids=ethereum&amp;vs_currencies=inr';
const getEthereumPrice = async() => {
    try {
        const response = await axios.get(url);
        // console.log(response)
        return response.data.ethereum.inr;
    } catch(error) {
        throw new Error(error.message);
    }
};

module.exports = getEthereumPrice;