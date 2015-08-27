angular.module('trackit.tasks.edit_task_controller', [
  'trackit.categories.service'
])
.controller('EditTaskCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'tasksService',
  function (
    $scope,
    $state,
    $stateParams,
    tasksService
  ) {

    var taskId = $stateParams.taskId;
    var categoryId = $stateParams.categoryId;

    tasksService.getOne(taskId).then(function(task) {
      $scope.task = task;
    });

    $scope.save = function () {
      $scope.task.save().then(function() {
        $state.go('categories.tasks.entries', {categoryId: categoryId, taskId: taskId});
      });
    };

    return this
  }
]);
