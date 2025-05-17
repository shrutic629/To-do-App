const SubtoodoList = require('../models/subtodoListModel');

exports.CreateSubList = async(req,res,next)=>{
    try{
        const {listName} = req.body;
        if(!listName){
            return res.status(400).json({message:'ListName is required'})
        }

        const existinglistName = await SubtoodoList.findOne({listName})
        if(existinglistName){
            return res.status(400).json({message:'Listname already exist'})
        }

        const sublist = new SubtoodoList({listName});
        await sublist.save();
        res.status(200).json({message:'sublist created',sublist})

    }
    catch(err){
        next(err)
    }
}

exports.GetSingleSubList = async(req,res,next)=>{
    try{
        const id = req.params.id;

        const existingSubList = await SubtoodoList.findById(id);
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
        const sublists = await SubtoodoList.find();
        if(!sublists){
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
        const id = req.params.id;

        const subList = await SubtoodoList.findByIdAndDelete(id);
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
        const id = req.params.id;
        const data = req.body

        const subList = await SubtoodoList.findByIdAndUpdate(id,data,{new:true});
        if(!subList){
            return res.status(400).json({message:'subList does not found'})
        }

        res.status(200).json({message:'SubList updated successfully',subList})

    }
    catch(err){
        next(err)
    }
}