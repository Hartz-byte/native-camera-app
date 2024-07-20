const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const authRoute = require("./routes/auth");

const app = express();

app.use(cors());
app.use(express.json());

// server running status check
app.get("/", (req, res) => {
  res.send("Server is running!!");
});

// /auth to register/login
app.use("/auth", authRoute);

// server start
const startServer = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("Connected to MongoDB!");
    app.listen(process.env.PORT, () => {
      console.log("Server connected!");
    });
  } catch (err) {
    console.error("Error connecting to MongoDB: ", err);
  }
};

startServer();
