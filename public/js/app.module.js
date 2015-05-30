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

}]);

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
