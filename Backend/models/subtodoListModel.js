const mongoose = require('mongoose');

const subtodoListModel = new mongoose.Schema({
    // listName:[
    //     {
    //         name:{
    //             type:String,
    //             required:true,
    //             trim:true,
    //         },
    //         completed:{
    //             type:Boolean,
    //             default:false
    //         }
    //     }
    // ],

    listName:{
        type:[String],
        required:true,
    },
    completed:{
        type:Boolean,
        required:true,
        default:false
    },
    todoListId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ToDoList"
    }
    
},{versionKey:false,timestamps:true})

const subtodoListSchema = mongoose.model("SubtoDoList",subtodoListModel)

module.exports = subtodoListSchema;