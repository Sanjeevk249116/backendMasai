const mongoose=require("mongoose");

const productShema=new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    price:{type:Number,required:true},
    rating:{type:Number,required:true},
    brand:{type:String,required:true},
    category:{type:String,required:true},
    thumbnail:{type:String,required:true},
    images:{type:[String],required:true},
    role:{type:String,enum:["user","admin"], default:"user"},
})


const ProductModels=mongoose.model("product",productShema)

module.exports={ProductModels};