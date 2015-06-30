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
    .state('admin', {
      abstract: true,
      templateUrl: 'js/partials/root/wrapper-tpl.html'
    })
      .state('admin.user', {
        url: '/user',
        template: '<cdgd-user></cdgd-user>',
        data: {
          protected: true,
          name: 'user'
        }
      })
        .state('admin.user.list', {
          url: '/list',
          template: '<cdgd-user-list></cdgd-user-list>',
          data: {
            protected: true,
            name: 'user'
          }
        })
        .state('admin.user.new', {
          url: '/new',
          template: '<cdgd-user-add></cdgd-user-add>'
        });

/*    .state('root', {
      url: '/',
      templateUrl: 'js/partials/root/wrapper-tpl.html'
    })
    .state('root.admin', {
      abstract: true,
      views: {
        'content@root': {
          template: ''
        },
        'sidebar@root': {
          template: '<cdgd-sidebar></cdgd-sidebar>'
        }
      }
    })
    .state('root.admin.projects', {
      url: 'projects',
      views: {
        'content@root': {
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
    .state('root.admin.user', {
      abstract: true,
      url: 'user',
      views: {
        'content@root': {
          template: '<cdgd-user></cdgd-user>'
        }
      },
      data: {
        protected: true,
        name: 'user'
      }
    })
    .state('root.admin.user.list', {
      url: '/list',
      views: {
        'userBody@root.admin.user': {
          template: '<cdgd-user-list></cdgd-user-list>'
        }
      }
    })
    .state('root.admin.user.add', {
      url: '/add',
      views: {
        'userBody@root.admin.user': {
          template: '<cdgd-user-add></cdgd-user-add>'
        }
      }
    })
    .state('root.login', {
      url: 'login',
      views: {
        'sidebar@root': {
          template: ''
        },
        'content@root' : {
          template: '<cdgd-login></cdgd-login>',
        }
      },
      data: {
        protected: false,
        name: 'login'
      }
    });*/

}]);
