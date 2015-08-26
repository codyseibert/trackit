var Sequelize = require('sequelize');
var sequelize = require('../sequelize');

module.exports = (function() {
  var Category = sequelize.define('category', {
    name: Sequelize.STRING,
    image: Sequelize.TEXT
  });

  return Category;
}());
