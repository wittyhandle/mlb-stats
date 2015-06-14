'use strict';

authModule.factory('authService', ['$q', '$http', '$window', 'jwtHelper', function($q, $http, $window, jwtHelper) {

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

  return {
    login: login
  };

}]);
