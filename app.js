require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const appRoutes = require("./Routes/app_routes");
const getEthereumPrice = require("./helper/fetchEthereumPrice");
const app = express();
const EthereumPrice = require("./models/etherumPrice");
const PORT = process.env.PORT || 5001;
const url = process.env.MONGO_URI || "mongodb://localhost:27017/koinxDB";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected...");
  } catch (error) {
    console.error(error.message);
  }
};
connectMongoDB();

// MiddleWare
app.use(express.json());
app.use("/api", appRoutes);

setInterval(async () => {
  try {
    const price = await getEthereumPrice();
    const data = new EthereumPrice({ price });
    data.save();
    console.log("Ethereum price updated");
  } catch (error) {
    console.error("Failed to update Ethereum price", error.message);
  }
}, 10*60*1000); // 10 min

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
