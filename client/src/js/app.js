angular.module('trackit', [
  'ui.router',
  'ui.bootstrap',
  'restangular',
  'angularMoment',
  'trackit.categories.controller',
  'trackit.categories.add_category_controller',
  'trackit.categories.edit_category_controller',
  'trackit.tasks.controller',
  'trackit.tasks.add_task_controller',
  'trackit.tasks.edit_task_controller',
  'trackit.entries.controller',
  'trackit.entries.add_entry_controller',
  'trackit.entries.edit_entry_controller'
])
.config(function (
  $stateProvider,
  $urlRouterProvider
) {

  $urlRouterProvider.otherwise('/categories');

  $stateProvider
    .state('categories', {
      url: '/categories',
      views: {
        'main@': {
          controller: 'CategoriesCtrl',
          templateUrl: '/categories/categories.html'
        }
      }
    })
    .state('categories.add', {
      url: '/add',
      views: {
        'main@': {
          controller: 'AddCategoryCtrl',
          templateUrl: '/categories/add_category.html'
        }
      }
    })
    .state('categories.edit', {
      url: '/:categoryId/edit',
      views: {
        'main@': {
          controller: 'EditCategoryCtrl',
          templateUrl: '/categories/edit_category.html'
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
    .state('categories.tasks.edit', {
      url: '/tasks/:taskId/edit',
      views: {
        'main@': {
          controller: 'EditTaskCtrl',
          templateUrl: '/tasks/edit_task.html'
        }
      }
    })
    .state('categories.tasks.add', {
      url: '/tasks/:taskId/add',
      views: {
        'main@': {
          controller: 'AddTaskCtrl',
          templateUrl: '/tasks/add_task.html'
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
    })
    .state('categories.tasks.entries.add', {
      url: '/entires/add',
      views: {
        'main@': {
          controller: 'AddEntryCtrl',
          templateUrl: '/entries/add_entry.html'
        }
      }
    })
    .state('categories.tasks.entries.edit', {
      url: '/entries/:entryId/edit',
      views: {
        'main@': {
          controller: 'EditEntryCtrl',
          templateUrl: '/entries/edit_entry.html'
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

    Restangular.setBaseUrl('http://' + location.hostname + ':10001/');

    return this
  }
]);
