// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/login');
  $stateProvider

    .state('root', {
      url: '/',
      views: {
        //'header': {
        //  template: '<cdgd-header></cdgd-header>'
        //},
        'sidebar': {
          template: '<cdgd-sidebar></cdgd-sidebar>'
        },
        'content': {
          template: ''
        }
      }
    })
    .state('root.projects', {
      url: 'projects',
      views: {
        'content@': {
          templateUrl: 'js/projects/projects.html',
          controller: 'projectsController'
        }
      },
      resolve: {
        projects: ['projectsService', function(projectsService) {
          return projectsService.getProjects();
        }]
      },
      data: {
        protected: true,
        name: 'projects'
      }
    })
    .state('root.users', {
      url: 'users',
      views: {
        'content@': {
          template: '<cdgd-users></cdgd-users>'
        }
      },
      data: {
        protected: true,
        name: 'projects'
      }
    })
    .state('root.login', {
      url: 'login',
      views: {
        //'header@': {
        //  template: ''
        //},
        'sidebar@': {
          template: ''
        },
        'content@' : {
          template: '<cdgd-login></cdgd-login>',
        }
      },
      data: {
        protected: false,
        name: 'login'
      }
    });

}]);
