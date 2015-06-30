'use strict';

var underscore = angular.module('underscore', []);
underscore.factory('_', function() {
  return window._;
});

var app = angular.module('mlb',
  [ 'underscore',
    'ngAnimate',
    'cdgd.auth',
    'cdgd.user',
    'cdgd.projects',
    'ui.router',
    'ui.bootstrap',
    'angular-jwt']);

app.config(['$httpProvider', 'jwtInterceptorProvider',
  function Config($httpProvider, jwtInterceptorProvider) {

    jwtInterceptorProvider.tokenGetter = ['$window', function($window) {
      return $window.sessionStorage.token;
    }];

    $httpProvider.interceptors.push('jwtInterceptor');
    $httpProvider.interceptors.push(['$q', '$injector', function($q, $injector) {
      return {
        'responseError': function(response) {

          if (response.status === 401) {
            $injector.get('$state').go('login');
          }

          return $q.reject(response);

        }
      };
    }]);

  }
]);

app.run(          ['$rootScope', '$state', 'jwtHelper', '$window', 'userService',
          function($rootScope, $state, jwtHelper, $window, userService) {

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {

    if (toState.data && toState.data.protected) {

      var token = $window.sessionStorage.token;
      if (!token || jwtHelper.isTokenExpired(token)) {

        event.preventDefault();
        $window.sessionStorage.removeItem('token');
        $state.go('login');

        /* if there's a token but no current user in the service (browser reload occurred), save the user again */
      } else if (token && !userService.getCurrentUser()) {
        userService.storeCurrentUser(jwtHelper.decodeToken(token));
      }
    }

  });

  $rootScope.$on('$stateChangeSuccess', function(event, toState, fromState, fromParams) {

    console.log('the toState', $state);
    console.log('the toState', $state.includes('root.admin.user'));
    $rootScope.containerClass = toState.data.name;
  });

  $rootScope.$state = $state;

}]);
