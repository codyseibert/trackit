angular.module('trackit.entries.service', [
  'ui.router'
])
.service('entriesService', [
  '$q',
  'Restangular',
  function (
    $q,
    Restangular
  ) {

    var getAll = function(taskId) {
      return Restangular.all('entries').getList({taskId: taskId});
    };

    var create = function (entry) {
      return Restangular.all('entries').post(entry);
    };

    var destroy = function (entryId) {
      return Restangular.one('entries', entryId).remove();
    };

    return {
      getAll: getAll,
      create: create,
      destroy: destroy
    };
  }
])
