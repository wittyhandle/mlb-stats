// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/login');
  $stateProvider
    .state('login', {
      url: '/login',
      views: {
        'content' : {
          template: '<cdgd-login></cdgd-login>',
        }
      },
      data: {
        protected: false,
        name: 'login'
      }
    })
    .state('projects', {
      url: '/projects',

      views: {
        'header': {
          template: '<cdgd-header></cdgd-header>'
        },
        'sidebar': {
          template: '<cdgd-sidebar></cdgd-sidebar>'
        },
        'content': {
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
    });

}]);
