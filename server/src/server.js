require('./routes');

require('./models/task');

require('./sequelize').sync().then(function() {
  require('./app').listen(10001);
});
