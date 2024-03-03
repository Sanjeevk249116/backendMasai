const mongoose=require("mongoose");
require("dotenv").config();

const connetion=mongoose.connect(process.env.MONGOSHURL);
module.exports={connetion}