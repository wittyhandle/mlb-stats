'use strict';

app.controller('loginController', ['$scope', 'authService', function($scope, authService) {

  $scope.credentials = {username: '', password: ''};

  $scope.login = function(credentials) {

    authService.login(credentials).then(function(user) {
      console.log('user', user);
    });

  };

}]);