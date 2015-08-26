angular.module('trackit.categories.controller', [
  'trackit.categories.service'
])
.controller('CategoriesCtrl', [
  '$scope',
  '$state',
  'categoriesService',
  function (
    $scope,
    $state,
    categoriesService
  ) {

    $scope.category = {};

    categoriesService.getAll().then(function(categories) {
      $scope.categories = categories;
    });

    $scope.createCategory = function () {
      categoriesService.create({
        name: $scope.category.name,
        image: $scope.category.image
      }).then(function(category) {
        $scope.category.name = '';
        $scope.category.image = '';
      });
    };

    $scope.categoryClicked = function (category) {
      $state.go('categories.tasks', {categoryId: category.id});
    };

    return this
  }
]);
