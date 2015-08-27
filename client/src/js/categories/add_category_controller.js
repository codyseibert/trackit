angular.module('trackit.categories.add_category_controller', [
  'trackit.categories.service'
])
.controller('AddCategoryCtrl', [
  '$scope',
  '$state',
  'categoriesService',
  function (
    $scope,
    $state,
    categoriesService
  ) {

    $scope.category = {
      name: '',
      image: ''
    };

    $scope.createCategory = function () {
      if ($scope.category.name === '') {
        alert('you must enter a category name');
        return;
      }

      categoriesService.create({
        name: $scope.category.name,
        image: $scope.category.image
      }).then(function(category) {
        $scope.category.name = '';
        $scope.category.image = '';
        $state.go('categories');
      });
    };

    return this
  }
]);
