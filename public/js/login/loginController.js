'use strict';

app.controller('loginController', ['$scope', 'authService', '$state', function($scope, authService, $state) {

  $scope.credentials = {username: '', password: ''};

  $scope.login = function(credentials) {

    authService.login(credentials).then(
      function(user) {
        $state.go('projects');
      },
      function(err) {
        console.log('err', err);
      });

  };

}]);
