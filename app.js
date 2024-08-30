require("dotenv").config();
const express = require("express");
const mongoose = require('mongoose');
const appRoutes=require("./Routes/app_routes");
const app = express();

const PORT = process.env.PORT || 5001;
const url = process.env.MONGO_URL || 'mongodb://localhost:27017/koinxDB';


const connectMongoDB = async () => {
    try {
        await mongoose.connect(databaseUrl);
        console.log("MongoDB connected...");
    } catch (error) {
        console.error(error.message);
    }
};

connectMongoDB();

// MiddleWare
app.use(express.json());
app.use(appRoutes);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});
