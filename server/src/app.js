const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server is running!!");
});

const startServer = async () => {
  try {
    app.listen(process.env.PORT, () => {
      console.log("Server connected!");
    });
  } catch (err) {
    console.error("Error connecting to the Server: ", err);
  }
};

startServer();
