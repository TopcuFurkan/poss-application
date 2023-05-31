const mongoose = require('mongoose')

const UserSchema=mongoose.Schema(
    {
        userName: {type:String},
        email: {type:String},
        password: {type:String},
        verify:{type:Boolean}
    },
    {timestamps:true}
)

const User= mongoose.model('users',UserSchema)

module.exports=User;