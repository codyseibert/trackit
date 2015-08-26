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

    entriesService.getAll(taskId).then(function(entries) {
      $scope.entries = entries;
    });

    $scope.createEntry = function () {
      entriesService.create({
        value: $scope.entry.value,
        taskId: taskId
      }).then(function(entry) {
        $scope.entry.value = '';
      });
    };

    $scope.destroyTask = function () {
      tasksService.destroy(taskId).then(function () {
        $state.go('categories.tasks', {categoryId: categoryId});
      });
    };

    return this
  }
]);
