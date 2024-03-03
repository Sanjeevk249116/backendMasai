const express = require("express");
const cors=require("cors")
require("dotenv").config();
const { router } = require("./routers/routerspath");
const { connetion } = require("./config/connection");
const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("", router);

app.listen(process.env.PORT, async () => {
  try {
    await connetion;
    console.log(`connection successfull on port ${process.env.PORT}`);
  } catch (err) {
    console.log("not connected");
  }
});
