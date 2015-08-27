angular.module('trackit.entries.controller', [
  'trackit.entries.service'
])
.controller('EntriesCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'tasksService',
  'entriesService',
  function (
    $scope,
    $state,
    $stateParams,
    tasksService,
    entriesService
  ) {

    var categoryId = $stateParams.categoryId;
    var taskId = $stateParams.taskId;
    $scope.entry = {};

    tasksService.getOne(taskId).then(function(task) {
      $scope.task = task;
    });

    entriesService.getAll(taskId).then(function(entries) {
      $scope.entries = entries;
    });

    $scope.create = function () {
      entriesService.create({
        value: $scope.entry.value,
        taskId: taskId
      }).then(function(entry) {
        $scope.entry.value = '';
      });
    };

    $scope.gotoTasks = function () {
      $state.go('categories.tasks', {taskId: taskId});
    };

    $scope.edit = function () {
      $state.go('categories.tasks.edit', {taskId: taskId});
    };

    $scope.editEntry = function (entry) {
      $state.go('categories.tasks.entries.edit', {entryId: entry.id});
    };

    $scope.gotoAddEntryState = function () {
      $state.go('categories.tasks.entries.add', {taskId: taskId});
    };

    $scope.delete = function () {
      var yes = confirm('are you sure you want to delete this task?');
      if (!yes) return;
      tasksService.destroy(taskId).then(function () {
        $state.go('categories.tasks', {categoryId: categoryId});
      });
    };

    return this
  }
]);
