const Task = require('./Task');

exports.getTasks = async ctx => {
  ctx.body = await Task.find();
};

exports.getOneTask = async ctx => {
  const id = ctx.params.id;
  const task = await Task.findById(id);

  if (!task) {
    ctx.throw(404, 'Task not found');
  }
  ctx.body = task;
};

exports.createTask = async ctx => {
  let values = ctx.request.body;
  let newTask = await Task.create(values);

  if (!newTask || !newTask._id) {
    ctx.throw(500, 'Error creating task');
  }
  ctx.body = newTask;
};

exports.updateTask = async ctx => {
  const id = ctx.params.id;
  const values = ctx.request.body;

  let foundTask = await Task.findById(id);

  if (!foundTask || !foundTask._id) {
    ctx.throw(404, 'Task not found');
  }

  let updated = await Task.findByIdAndUpdate(id, values, { new: true });

  if (!updated || !updated._id) {
    ctx.throw(500, 'Error updating item');
  }

  ctx.body = updated;
};

exports.deleteTask = async ctx => {
  const id = ctx.params.id;

  const task = await Task.findById(id);
  if (!task) {
    ctx.throw(404, 'Task Class not found');
  }

  let deletedTask = await Task.findByIdAndRemove(id);

  if (!deletedTask) {
    ctx.throw(500, 'Error deleting task');
  }

  ctx.body = deletedTask;
};
