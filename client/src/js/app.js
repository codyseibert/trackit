angular.module('trackit', [
  'ui.router',
  'ui.bootstrap',
  'restangular',
  'trackit.categories.controller',
  'trackit.tasks.controller'
])
.config(function (
  $stateProvider,
  $urlRouterProvider
) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('tasks', {
      url: '/tasks',
      views: {
        'main': {
          controller: 'TasksCtrl',
          templateUrl: '/tasks/tasks.html'
        }
      }
    })
    .state('categories', {
      url: '/categories',
      views: {
        'main': {
          controller: 'CategoriesCtrl',
          templateUrl: '/categories/categories.html'
        }
      }
    });

  return this
})
.run([
  'Restangular',
  function (
    Restangular
  ) {

    Restangular.setBaseUrl('http://localhost:10001/');

    return this
  }
]);
