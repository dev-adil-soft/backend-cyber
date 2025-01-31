const mongoose=require('mongoose');
const taskData=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    status:{
        type:String,
        enum:['Pending','Completed'],
        default:'Pending'
    }
})
const User=mongoose.model('users',taskData);
module.exports = User