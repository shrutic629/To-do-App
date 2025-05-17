const TodoList = require('../models/todoListModel');

exports.CreateList = async(req,res,next)=>{
    try{
        const {title} = req.body;
        if(!title){
            return res.status(400).json({message:'Title is required'})
        }

        const existingTitle = await TodoList.findOne({title})
        if(existingTitle){
            return res.status(400).json({message:'Title already exist'})
        }

        const list = new TodoList({title});
        await list.save();
        res.status(200).json({message:'List created',list})

    }
    catch(err){
        next(err)
    }
}

exports.GetSingleList = async(req,res,next)=>{
    try{
        const id = req.params.id;

        const existingList = await TodoList.findById(id);
        if(!existingList){
            return res.status(400).json({message:'List does not found'})
        }

        res.status(200).json({message:'List found successfully',existingList})
    }
    catch(err){
        next(err);
    }
}

exports.GetAllLists = async(req,res,next)=>{
    try{
        const lists = await TodoList.find();
        if(!lists){
            return res.status(400).json({message:'No Lists found'})
        }

        res.status(200).json({message:'Lists obtain successfully',lists})
    }
    catch(err){
        next(err)
    }
}

exports.DeleteList = async(req,res,next)=>{
    try{
        const id = req.params.id;

        const List = await TodoList.findByIdAndDelete(id);
        if(!List){
            return res.status(400).json({message:'No List found'})
        }

        res.status(200).json({message:'List deleted successfully',List})
    }
    catch(err){
        next(err)
    }
}

exports.UpdateList = async(req,res,next)=>{
    try{
        const id = req.params.id;
        const data = req.body

        const List = await TodoList.findByIdAndUpdate(id,data,{new:true});
        if(!List){
            return res.status(400).json({message:'List does not found'})
        }

        res.status(200).json({message:'List updated successfully',List})

    }
    catch(err){
        next(err)
    }
}