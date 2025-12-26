const express=require('express');
const mongoose=require('mongoose');

const taskManagerScema=new mongoose.Schema({
    title:{
        required:true,
        type:String,
        trim:true
    },
    description:{
        required:false,
        type:String,
        trim:false
    }
},{createdAt:new Date()})

module.exports=mongoose.model('taskManger',taskManagerScema);