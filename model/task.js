const mongoose=require('mongoose');
const taskschema=new mongoose.Schema({
    title:{
        required:true,
        trim:true,
        type:String,
    },
    description:{
        required:true,
        trim:true,
        type:String,
    },
    completed:{
        trim:true,
        type:Boolean, 
        default:false,
    }
});
const task=mongoose.model('task',taskschema);
module.exports=task;