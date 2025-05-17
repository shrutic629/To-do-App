const mongoose = require('mongoose');

const todoListModel = new mongoose.Schema({
    title:{
        type:String,
        trim:true,
        unique:true,
        required:true,
    },
    completed:{
        type:Boolean,
        required:true,
        default:false,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
    
},{versionKey:false,timestamps:true})

const todoListSchema = mongoose.model("ToDoList",todoListModel)

module.exports = todoListSchema;