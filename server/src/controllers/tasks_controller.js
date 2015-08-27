var Promise = require('bluebird');
var Task = require('../models/task');

module.exports = (function() {

  var index, show, post, put, destroy;

  index = function (req, res) {
    Task.findAll({where: req.query}).then(function(tasks) {
      res.status(200);
      res.send(tasks);
    });
  };

  show = function (req, res) {
    Task.findById(req.params.id).then(function(task) {
      res.status(200);
      res.send(task);
    });
  };

  put = function (req, res) {
    Task.findById(req.params.id).then(function(task) {
      task.name = req.body.name;
      task.category = req.body.category;
      task.image = req.body.image;
      task.save().then(function() {
        res.status(200);
        res.send(task);
      });
    });
  };

  post = function (req, res) {
    task = Task.create({
      name: req.body.name,
      categoryId: req.body.categoryId,
      image: req.body.image
    }).then(function(task) {
      res.status(200);
      res.send(task);
    });
  };

  destroy = function (req, res) {
    var id = req.params.id;
    Task.findById(id).then(function(task) {
      return task.destroy();
    }).then( function (task) {
      res.status(200);
      res.send(task);
    });
  };

  return {
    index: index,
    show: show,
    put: put,
    post: post,
    destroy: destroy
  };

}());
