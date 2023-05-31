const mongoose = require('mongoose')

const ProductSchema=mongoose.Schema(
    {
        title: {type:String},
        img:{type:String,},
        price:{type:Number},
        category:{type:String},
    },
    {timestamps:true}
)

const Product= mongoose.model('products',ProductSchema)

module.exports=Product;