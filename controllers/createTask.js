const User = require("../models/userTask");
const createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const data = await User.create({
      title,
      description,
    });
    return res.status(200).json({
      message: "Task created successfully",
      data,
    });
  } catch (error) {
    return res.status(500).json({
      message: "An error occurred",
      error: error.message,
    });
  }
};

module.exports = createTask;
