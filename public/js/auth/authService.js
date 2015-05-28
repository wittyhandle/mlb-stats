'use strict';

app.factory('authService', ['$q', '$http', function($q, $http) {

  var login = function(creds) {

    var deferred = $q.defer();
    
    $http.post('/login', creds)
      .success(function(data, status, headers, config) {
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