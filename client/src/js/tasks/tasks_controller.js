angular.module('trackit.tasks.controller', [
  'trackit.tasks.service'
])
.controller('TasksCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'categoriesService',
  'tasksService',
  function (
    $scope,
    $state,
    $stateParams,
    categoriesService,
    tasksService
  ) {

    var categoryId = $stateParams.categoryId;
    $scope.task = {};

    categoriesService.getOne(categoryId).then(function(category) {
      $scope.category = category;
    });

    tasksService.getAll(categoryId).then(function(tasks) {
      $scope.tasks = tasks;
    });

    $scope.gotoCategories = function () {
      $state.go('categories', {categoryId: categoryId});
    };

    $scope.createTask = function () {
      tasksService.create({
        name: $scope.task.name,
        image: $scope.task.image,
        categoryId: categoryId
      }).then(function(task) {
        $scope.task.name = '';
        $scope.task.image = '';
      });
    };

    $scope.edit = function () {
      $state.go('categories.edit', {categoryId: categoryId});
    };

    $scope.gotoAddTaskState = function () {
      $state.go('categories.tasks.add', {categoryId: categoryId});
    };

    $scope.destroyCategory = function () {
      var yes = confirm('are you sure you want to delete this category?');
      if (!yes) return;
      categoriesService.destroy(categoryId).then(function () {
        $state.go('categories');
      });
    };

    $scope.taskClicked = function (task) {
      console.log(task);
      $state.go('categories.tasks.entries', {taskId: task.id});
    };

    return this
  }
]);
