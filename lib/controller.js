const Task = require('./Task');

exports.getTasks = async (req,res) => {
  req.body = await Task.find();
};

exports.getOneTask = async (req,res) => {
  const id = req.params.id;
  const task = await Task.findById(id);

  if (!task) {
    res.throw(404, 'Task not found');
  }
  res.body = task;
};

exports.createTask = async (req,res) => {
  let values = req.body;
  let newTask = await Task.create(values);

  if (!newTask || !newTask._id) {
    res.throw(500, 'Error creating task');
  }
  res.body = newTask;
};

exports.updateTask = async (req,res) => {
  const id = req.params.id;
  const values = req.body;

  let foundTask = await Task.findById(id);

  if (!foundTask || !foundTask._id) {
    res.throw(404, 'Task not found');
  }

  let updated = await Task.findByIdAndUpdate(id, values, { new: true });

  if (!updated || !updated._id) {
  res.throw(500, 'Error updating item');
  }

  res.body = updated;
};

exports.deleteTask = async (req,res)=> {
  const id = req.params.id;

  const task = await Task.findById(id);
  if (!task) {
    res.throw(404, 'Task Class not found');
  }

  let deletedTask = await Task.findByIdAndRemove(id);

  if (!deletedTask) {
    res.throw(500, 'Error deleting task');
  }

  res.body = deletedTask;
};
