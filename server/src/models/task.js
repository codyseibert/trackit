var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

var Category = require('./category');

module.exports = (function() {
  var Task = sequelize.define('task', {
    name: Sequelize.STRING,
    image: Sequelize.TEXT
  });

  Task.belongsTo(Category);

  return Task;
}());
