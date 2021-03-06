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

    var getOne = function (categoryId) {
      return Restangular.one('categories', categoryId).get();
    };

    var search = function (fields) {
      return Restangular.all('categories').getList(fields);
    };

    var create = function (category) {
      return Restangular.all('categories').post(category);
    };

    var destroy = function (categoryId) {
      return Restangular.one('categories', categoryId).remove();
    };


    return {
      create: create,
      getAll: getAll,
      getOne: getOne,
      search: search,
      destroy: destroy
    };
  }
])
