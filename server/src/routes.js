var app = require('./app');
var tasksCtrl = require('./controllers/tasks_controller');
var categoriesCtrl = require('./controllers/categories_controller');
var entriesCtrl = require('./controllers/entries_controller');

module.exports = (function() {
  app.get('/tasks', tasksCtrl.index);
  app.get('/tasks/:id', tasksCtrl.show);
  app.post('/tasks', tasksCtrl.post);
  app.put('/tasks/:id', tasksCtrl.put);
  app.delete('/tasks/:id', tasksCtrl.destroy);

  app.get('/categories', categoriesCtrl.index);
  app.get('/categories/:id', categoriesCtrl.show);
  app.post('/categories', categoriesCtrl.post);
  app.put('/categories/:id', categoriesCtrl.put);
  app.delete('/categories/:id', categoriesCtrl.destroy);

  app.get('/entries', entriesCtrl.index);
  app.get('/entries/:id', entriesCtrl.show);
  app.post('/entries', entriesCtrl.post);
  app.put('/entries/:id', entriesCtrl.put);
  app.delete('/entries/:id', entriesCtrl.destroy);
}());
