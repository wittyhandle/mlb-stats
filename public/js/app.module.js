'use strict';

var app = angular.module('mlb', ['ui.router', 'ui.bootstrap']);

app.run(['$rootScope', '$state', function($rootScope, $state) {

  $rootScope.$on('$stateChangeStart', function(event, toState, toParams) {

    var isProtected = toState.data.protected;
    if (isProtected && typeof $rootScope.currentUser === 'undefined') {
      event.preventDefault();
      $state.go('login');
    }
  });

}]);
