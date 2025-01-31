const mongoose=require("mongoose")
require("dotenv").config()

const MONGODB_URL=process.env.MONGODB_URL

function dbconnection(){
    mongoose.connect(MONGODB_URL).then(()=>{
        console.log("Connected to MongoDB.")
    }).catch((error)=>{
      console.error("Failed to connect to MongoDB:", error.message)
    })
}

module.exports=dbconnection