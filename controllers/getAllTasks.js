const User=require("../models/userTask")

const getAllTasks=async(req,res)=>{
   try {
     const tasks=await User.find()
     return res.status(200).json({
        message:"Task get Successfully",
        tasks: tasks
     })
   } catch (error) { 
    return res.status(500).json({
        message: "Error getting tasks",
        error: error.message
 
    })
   }
}
module.exports = getAllTasks