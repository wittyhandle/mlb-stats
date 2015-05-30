'use strict';

var app = angular.module('mlb',
  [ 'ui.router',
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

app.run(['$rootScope', '$state', 'jwtHelper', '$window', function($rootScope, $state, jwtHelper, $window) {

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {

    var isProtected = toState.data.protected;
    if (isProtected) {

      var token = $window.sessionStorage.token;
      if (!token || jwtHelper.isTokenExpired(token)) {
        event.preventDefault();
        $state.go('login');
      }
    }

  });

}]);
