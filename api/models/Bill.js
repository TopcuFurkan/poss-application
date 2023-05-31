const mongoose = require('mongoose')

const BillSchema=mongoose.Schema(
    {
        customerName: {type:String},
        customerPhoneNumber: {type:String},
        paymentMode: {type:String},
        subTotal: {type:Number},
        tax: {type:Number},
        totalAmount: {type:Number},
        cardItems: {type:Array},
    },
    {timestamps:true}
)

const Bill= mongoose.model('bills',BillSchema)

module.exports= Bill;