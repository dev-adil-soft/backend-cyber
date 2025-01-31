const User=require("../models/userTask")

const updateTask=async(req,res)=>{
    try {
        const {id}=req.params
        const {title,description}=req.body
        const updatedTask=await User.findByIdAndUpdate(id,{title,description},{new:true})
        return res.status(200).json({
            message:"Task updated successfully",
            data:updatedTask
        })
    } catch (error) {
        return res.status(500).json({
            message: "Error updating task",
            error
        })
    }
 }

module.exports=updateTask;