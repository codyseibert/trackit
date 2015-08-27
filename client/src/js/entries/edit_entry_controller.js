angular.module('trackit.entries.edit_entry_controller', [
  'trackit.categories.service'
])
.controller('EditEntryCtrl', [
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
    var categoryId = $stateParams.categoryId;
    var entryId = $stateParams.entryId;

    entriesService.getOne(entryId).then(function(entry) {
      $scope.entry = entry;
    });

    $scope.save = function () {
      $scope.entry.save().then(function() {
        $state.go('categories.tasks.entries', {categoryId: categoryId, taskId: taskId});
      });
    };

    return this
  }
]);
