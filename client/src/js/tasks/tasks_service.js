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

    var getAll = function() {
      return Restangular.all('tasks').getList();
    };

    var getOne = function (id) {
      return Restangular.one('tasks', id).get();
    };

    var search = function (fields) {
      return Restangular.all('tasks').getList(fields);
    };

    return {
      getAll: getAll,
      getOne: getOne,
      search: search
    };
  }
])
