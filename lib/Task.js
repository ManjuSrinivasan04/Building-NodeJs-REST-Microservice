const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  title: { type: String, required: true },
  completed: Boolean
});

module.exports = mongoose.model('Task', schema);
