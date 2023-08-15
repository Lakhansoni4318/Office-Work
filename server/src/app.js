const express = require("express");
const Connection = require("./db/connectDb");
const cors = require("cors");
require("dotenv").config();
const app = express();

app.use(cors());

const Router = require("./routers/router");
app.use("/", Router);

Connection();

app.listen(3000, () => {
  try {
    console.log(`Connection Created Successfully 3000`);
  } catch (error) {
    console.log(error);
  }
});
