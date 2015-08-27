angular.module('trackit.entries.add_entry_controller', [
  'trackit.categories.service'
])
.controller('AddEntryCtrl', [
  '$scope',
  '$state',
  '$stateParams',
  'entriesService',
  function (
    $scope,
    $state,
    $stateParams,
    entriesService
  ) {

    var taskId = $stateParams.taskId;

    $scope.entry = {
      value: ''
    };

    $scope.add = function () {
      if ($scope.entry.value === '') {
        alert('you must enter a entry value');
        return;
      }

      entriesService.create({
        value: $scope.entry.value,
        taskId: taskId
      }).then(function(entry) {
        $scope.entry.value = '';
        $state.go('categories.tasks.entries', {taskId: taskId});
      });
    };

    return this
  }
]);
