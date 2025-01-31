const User=require("../models/userTask")
const deleteTask=async(req,res)=>{
    try {
        const {id}=req.params
        const task=await User.findByIdAndDelete(id)
        return res.status(200).json({
            success:true,
            message:"Task deleted successfully",
            data:task
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Server Error",
            error:error.message
        })
    }
}

module.exports=deleteTask;