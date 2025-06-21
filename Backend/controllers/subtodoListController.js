const SubtoodoList = require('../models/subtodoListModel');

exports.CreateSubList = async(req,res,next)=>{
    try{
        const todoListid = req.params.todoListid;

        const {listName} = req.body;
        if(!Array.isArray(listName)){
            return res.status(400).json({message:'Listname is empty array'})
        }

        const existinglist = await SubtoodoList.findOne({listName,todoListId:todoListid})
        if(existinglist){
            return res.status(400).json({message:'Listname already exist'})
        }

        const sublist = new SubtoodoList({listName,todoListId:todoListid});
        await sublist.save();
        res.status(200).json({message:'sublist created',sublist})

    }
    catch(err){
        next(err)
    }
}
  
  

exports.GetSingleSubList = async(req,res,next)=>{
    try{
        const todoListid = req.params.todoListid;
        const id = req.params.sublistid;

        const existingSubList = await SubtoodoList.findOne({_id:id,todoListId:todoListid});
        if(!existingSubList){
            return res.status(400).json({message:'SubList does not found'})
        }

        res.status(200).json({message:'SubList found successfully',existingSubList})
    }
    catch(err){
        next(err);
    }
}

exports.GetAllSubLists = async(req,res,next)=>{
    try{
        const todoListid = req.params.todoListid;

        const sublists = await SubtoodoList.find({todoListId:todoListid});
        if(sublists.length === 0){
            return res.status(400).json({message:'No sublists found'})
        }

        res.status(200).json({message:'SubLists found successfully',sublists})
    }
    catch(err){
        next(err)
    }
}


exports.DeleteSubList = async(req,res,next)=>{
    try{
        const todoListid = req.params.todoListid;
        const id = req.params.sublistid;

        const subList = await SubtoodoList.findOneAndDelete({_id:id,todoListId:todoListid});
        if(!subList){
            return res.status(400).json({message:'No subList found'})
        }

        res.status(200).json({message:'SubList deleted successfully',subList})
    }
    catch(err){
        next(err)
    }
}

exports.UpdateSubList = async(req,res,next)=>{
    try{
        const todoListid = req.params.todoListid;
        const id = req.params.sublistid;
        const data = req.body;

        const subList = await SubtoodoList.findOneAndUpdate({_id:id,todoListId:todoListid},data,{new:true});
        if(!subList){
            return res.status(400).json({message:'subList does not found'})
        }

        res.status(200).json({message:'SubList updated successfully',subList})

    }
    catch(err){
        next(err)
    }
}

  