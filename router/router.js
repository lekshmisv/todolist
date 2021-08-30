const express = require('express');
const router = new express.Router();
const task=require('../model/task');

router.get('/',(req,res)=>{
    res.json({
        message:"hlo world"
    });
});

router.get('/tasks',async(req,res)=>{
    const tasks=await task.find({});
    if (!tasks) {
        return res.json({message:'No task added'});
    }
    res.json([
        tasks
    ])
})


router.post('/addtask',async(req,res)=>{
    const {title, description}=req.body;
    const addTask=new task({
        title:title,
        description:description
    });
    await addTask.save((error,result)=>{
        if(error){
            return res.json({message:'Task added failed',error:error})
           // res.json({message:"Inserted failed"})
        }
        res.json({message:'Task added',result:result})
  // res.json({message:"Inserted sucessfully",task:addTask})
    })
})



module.exports=router;