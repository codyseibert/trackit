angular.module('trackit.tasks.add_task_controller', [
  'trackit.categories.service'
])
.controller('AddTaskCtrl', [
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

    var categoryId = $stateParams.categoryId;

    $scope.task = {
      name: '',
      image: ''
    };

    $scope.add = function () {
      if ($scope.task.name === '') {
        alert('you must enter a task name');
        return;
      }

      tasksService.create({
        name: $scope.task.name,
        image: $scope.task.image,
        categoryId: categoryId
      }).then(function(task) {
        $scope.task.name = '';
        $scope.task.image = '';
        $state.go('categories.tasks', {categoryId: categoryId});
      });
    };

    return this
  }
]);
