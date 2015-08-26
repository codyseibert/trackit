var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

var Task = require('./task');

module.exports = (function() {
  var Entry = sequelize.define('entry', {
    value: Sequelize.INTEGER,
    date: Sequelize.DATE
  });

  Entry.belongsTo(Task);

  return Entry;
}());
