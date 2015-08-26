angular.module('trackit.tasks.service', [
  'ui.router'
])
.service('tasksService', [
  '$q',
  'Restangular',
  function (
    $q,
    Restangular
  ) {

    var getAll = function(categoryId) {
      return Restangular.all('tasks').getList({categoryId: categoryId});
    };

    var getOne = function (id) {
      return Restangular.one('tasks', id).get();
    };

    var create = function (task) {
      return Restangular.all('tasks').post(task);
    };

    var destroy = function (taskId) {
      return Restangular.one('tasks', taskId).remove();
    };

    return {
      getAll: getAll,
      getOne: getOne,
      create: create,
      destroy: destroy
    };
  }
])
