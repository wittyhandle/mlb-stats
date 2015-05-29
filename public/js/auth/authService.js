'use strict';

app.factory('authService', ['$q', '$http', '$window', function($q, $http, $window) {

  var login = function(creds) {

    var deferred = $q.defer();

    $http.post('/api/authenticate', creds)
      .success(function(data, status, headers, config) {
        $window.sessionStorage.token = data.token;
        deferred.resolve(data);
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
