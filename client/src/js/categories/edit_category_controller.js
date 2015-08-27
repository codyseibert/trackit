angular.module('trackit.categories.edit_category_controller', [
  'trackit.categories.service'
])
.controller('EditCategoryCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'categoriesService',
  function (
    $scope,
    $state,
    $stateParams,
    categoriesService
  ) {

    var categoryId = $stateParams.categoryId;

    categoriesService.getOne(categoryId).then(function(category) {
      $scope.category = category;
    });

    $scope.save = function () {
      $scope.category.save().then(function() {
        $state.go('categories.tasks', {categoryId: categoryId});
      });
    };

    return this
  }
]);
