var Promise = require('bluebird');
var Entry = require('../models/entry');

module.exports = (function() {

  var index, show, post, put, destroy;

  index = function (req, res) {
    Entry.findAll({where: req.query}).then(function(entries) {
      res.status(200);
      res.send(entries);
    });
  };

  show = function (req, res) {
    Entry.findById(req.params.id).then(function(entries) {
      res.status(200);
      res.send(entries);
    });
  };

  put = function (req, res) {
    Entry.findById(req.params.id).then(function(entry) {
      entry.value = req.body.value;
      entry.save().then(function() {
        res.status(200);
        res.send(entry);
      });
    });
  };

  post = function (req, res) {
    Entry.create({
      value: req.body.value,
      taskId: req.body.taskId,
      date: new Date()
    }).then(function(entry) {
      res.status(200);
      res.send(entry);
    });
  };

  destroy = function (req, res) {
    Entry.findById(req.params.id).then(function(entry) {
      return entry.destroy();
    }).then( function (entry) {
      res.status(200);
      res.send(entry);
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
