angular.module('trackit.tasks.controller', [
  'trackit.tasks.service'
])
.controller('TasksCtrl', [
  '$scope',
  'tasksService',
  function (
    $scope,
    tasksService
  ) {

    tasksService.getAll().then(function(tasks) {
      console.log(tasks);
      $scope.tasks = tasks;
    });

    return this
  }
]);
