angular.module('trackit.categories.controller', [
  'trackit.categories.service'
])
.controller('CategoriesCtrl', [
  '$scope',
  'categoriesService',
  function (
    $scope,
    categoriesService
  ) {

    $scope.category = {};

    categoriesService.getAll().then(function(categories) {
      console.log(categories);
      $scope.categories = categories;
    });

    $scope.createCategory = function () {
      categoriesService.create({
        name: $scope.category.name,
        image: $scope.category.image
      }).then(function(category) {
        console.log(category);
        $scope.category.name = '';
        $scope.category.image = '';
      });
    };

    return this
  }
]);
