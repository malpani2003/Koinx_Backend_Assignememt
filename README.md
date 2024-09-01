# Develop a Server Side Application to fetch Crypto Transactions of a user

This Node.js application provides routes to fetch Ethereum transactions and price data and also calculates user expenses based on Ethereum transactions.

- Task  : https://koinx.notion.site/Take-home-Assignment-Backend-Intern-3c4296a3e291463db461eaa776c56858
- Youtube Video Link : https://youtu.be/z6oRbIxfLrc

## Requirements

- Node.js
- MongoDB
- Etherscan API Key
- CoinGecko API Key

## Installation

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/malpani2003/Koinx_Backend_Assignememt.git
   cd Koinx_Backend_Assignememt
   ```

2. **Install Dependencies:**

   ```bash
   npm install
   ```

3. **Create an Environment File:**

   Create a `.env` file in the root directory and enter your data:

   ```plaintext
   ETHERSCAN_API_KEY=
   MONGO_URI=
   PORT=5001
   ```
4. **Start Server**
   ```bash
   npm start
   ```
## API Endpoints

### 1. User Expenses Route
Example: https://koinx-backend-assignememt.onrender.com/api/expenses/0xce94e5621a5f7068253c42558c147480f38b5e0d

### 2. User Transactions Route
```http
GET /api/transactions/:address
```
Example: https://koinx-backend-assignememt.onrender.com/api/transactions/0xce94e5621a5f7068253c42558c147480f38b5e0d

### 3. Home Route
```http
GET /api/home
```
Example: https://koinx-backend-assignememt.onrender.com/api/home

- Author : Pranav Malpani
