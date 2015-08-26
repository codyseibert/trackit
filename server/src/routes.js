var app = require('./app');
var tasksCtrl = require('./controllers/tasks_controller');
var categoriesCtrl = require('./controllers/categories_controller');

module.exports = (function() {
  app.get('/tasks', tasksCtrl.get);
  app.post('/tasks', tasksCtrl.post);
  app.put('/tasks/:id', tasksCtrl.put);
  app.delete('/tasks/:id', tasksCtrl.destroy);

  app.get('/categories', categoriesCtrl.get);
  app.post('/categories', categoriesCtrl.post);
  app.put('/categories/:id', categoriesCtrl.put);
  app.delete('/categories/:id', categoriesCtrl.destroy);
}());
