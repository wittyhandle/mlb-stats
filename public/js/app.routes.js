// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/login');
  $stateProvider
    .state('login', {
      url: '/login',
      template: '<cdgd-login></cdgd-login>',
      data: {
        protected: false,
        name: 'login'
      }
    })
    .state('projects', {
      url: '/projects',
      templateUrl: 'js/projects/projects.html',
      controller: 'projectsController',
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
