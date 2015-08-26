angular.module('trackit.categories.service', [
  'ui.router'
])
.service('categoriesService', [
  '$q',
  'Restangular',
  function (
    $q,
    Restangular
  ) {

    var getAll = function() {
      return Restangular.all('categories').getList();
    };

    var getOne = function (id) {
      return Restangular.one('categories', id).get();
    };

    var search = function (fields) {
      return Restangular.all('categories').getList(fields);
    };

    var create = function (category) {
      return Restangular.all('categories').post(category);
    };

    return {
      create: create,
      getAll: getAll,
      getOne: getOne,
      search: search
    };
  }
])
