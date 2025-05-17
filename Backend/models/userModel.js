const mongoose = require('mongoose');

const userModel = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"name is required"],
        trim:true,
        lowercase:true
    },
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"],
        trim:true
    },
    image:{
        type:String,
        // required:[true,"Image is required"],
    },
    otp:{
        type:Number,
    },
    otpExpiry:{
        type:Number,
    },
},{versionKey:false,timestamps:true})

const userSchema = mongoose.model("User",userModel)

module.exports = userSchema;