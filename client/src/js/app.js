angular.module('trackit', [
  'ui.router',
  'ui.bootstrap',
  'restangular',
  'trackit.categories.controller',
  'trackit.tasks.controller',
  'trackit.entries.controller'
])
.config(function (
  $stateProvider,
  $urlRouterProvider
) {

  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('categories', {
      url: '/categories',
      views: {
        'main': {
          controller: 'CategoriesCtrl',
          templateUrl: '/categories/categories.html'
        }
      }
    })
    .state('categories.tasks', {
      url: '/:categoryId',
      views: {
        'main@': {
          controller: 'TasksCtrl',
          templateUrl: '/tasks/tasks.html'
        }
      }
    })
    .state('categories.tasks.entries', {
      url: '/tasks/:taskId',
      views: {
        'main@': {
          controller: 'EntriesCtrl',
          templateUrl: '/entries/entries.html'
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
