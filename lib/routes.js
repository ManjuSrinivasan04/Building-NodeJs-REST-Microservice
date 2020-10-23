const express=require('express');
const router=express.Router();
const bodyParser = require('body-parser');
const controller=require('./controller');
module.exports = (app) => {
  app.route('/task').get(controller.getTasks);
  app.route('/task/:id').get(controller.getOneTask);
  app.route('/task').post(bodyParser
(), controller.createTask);
  app.route('/task/:id').put(bodyParser
(), controller.updateTask);
  app.route('/task/:id').delete( controller.deleteTask);
  
};
