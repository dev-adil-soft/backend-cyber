const express=require('express');
const app=express();
require("dotenv").config()
const dbconnection=require("./config/databaseconnection")
const router=require("./routes/userTask")
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.use('/api/v1',router)
dbconnection()
const PORT=process.env.PORT

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})