const express = require("express");
const router = express.Router();
const createTask = require("../controllers/createTask");
const getAllTasks = require("../controllers/getAllTasks")
const deleteTask=require("../controllers/deleteTask")
const updateTask=require("../controllers/updateTask")
router.post("/createTask", createTask);
router.get('/getAllTasks', getAllTasks);
router.delete('/deleteTask/:id', deleteTask);
router.put('/updateTask/:id', updateTask);
module.exports = router;
