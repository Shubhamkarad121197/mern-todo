const express = require("express");
const taskManagerScema = require("../models/taskModel");

const routes = express.Router();

routes.post("/task", async (req, res) => {
  try {
    const { title, description } = req.body;
    console.log('REQ Body',req.body)
    const Task = await taskManagerScema.create({ title, description });
    res.status(201).json({ message: "Task Created Successfully", data: Task });
  } catch (err) {
    res.status(400).json({ message: "Something Went Wrong" });
  }
});

routes.get('/task', async (req, res) => {
  try {
    const tasks = await taskManagerScema.find();

    console.log(tasks);

    res.status(200).json({
      result: 'Successful',
      data: tasks
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = routes;
