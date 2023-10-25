const express = require("express");
const app = express();
require('dotenv').config();
const cors = require('cors'); 

const port = process.env.PORT;

const corsOptions = {
  origin: process.env.CORS_URL,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Application is running on port ${port}.`);
});

app.get("/", (req, res) => {
  res.end(`Backend for template eshop`);
});

module.exports = app;
