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

    tasksService.getAll(categoryId).then(function(tasks) {
      $scope.tasks = tasks;
    });

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

    $scope.destroyCategory = function () {
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
