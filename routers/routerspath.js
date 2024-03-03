const express=require("express");
const { getProduct, getIdProduct } = require("../itemsPage/productsMains");
const router=express.Router();

router.get("/",getProduct);
router.get("/:id",getIdProduct);




module.exports={router};