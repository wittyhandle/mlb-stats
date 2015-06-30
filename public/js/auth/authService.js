'use strict';

authModule.factory('authService', ['$q', '$http', '$window', 'jwtHelper', '$state',
  function($q, $http, $window, jwtHelper, $state) {

  var login = function(creds) {

    var deferred = $q.defer();

    $http.post('/api/authenticate', creds)
      .success(function(data, status, headers, config) {
        $window.sessionStorage.token = data.token;
        deferred.resolve(jwtHelper.decodeToken(data.token));
      })
      .error(function(data, status, headers, config) {
        deferred.reject(status);
      });

    return deferred.promise;

  };

  var logout = function() {
    $window.sessionStorage.removeItem('token');
    $state.go('login');
  };

  return {
    login: login,
    logout: logout
  };

}]);
