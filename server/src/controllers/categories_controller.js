var Promise = require('bluebird');
var Category = require('../models/category');

module.exports = (function() {

  var index, post, put, destroy;

  index = function (req, res) {
    Category.findAll().then(function(categories) {
      res.status(200);
      res.send(categories);
    });
  };

  show = function (req, res) {
    Category.findById(req.params.id).then(function(category) {
      res.status(200);
      res.send(category);
    });
  };

  put = function (req, res) {
    Category.findById(req.params.id).then(function(category) {
      category.name = req.body.name;
      category.image = req.body.image;
      category.save().then(function() {
        res.status(200);
        res.send(category);
      });
    });
  };

  post = function (req, res) {
    Category.create({
      name: req.body.name,
      image: req.body.image
    }).then(function(category) {
      res.status(200);
      res.send(category);
    });
  };

  destroy = function (req, res) {
    Category.findById(req.params.id).then(function(category) {
      return category.destroy();
    }).then( function (category) {
      res.status(200);
      res.send(category);
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
