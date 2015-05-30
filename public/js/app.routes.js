// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/login');
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'js/login/login.html',
      controller: 'loginController',
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
        projects: ['projectService', function(projectService) {
          return projectService.getProjects();
        }]
      },
      data: {
        protected: true,
        name: 'projects'
      }
    });

}]);
