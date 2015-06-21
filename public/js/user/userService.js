'use strict';

userModule.factory('userService', ['$http', '$q', function($http, $q) {

  var currentUser = null;

  var storeCurrentUser = function(user) {
    currentUser = user;
  };

  var getCurrentUser = function() {
    return currentUser;
  };

  var getUsers = function() {

    var deferred = $q.defer();

    $http.get('/api/users')
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        deferred.reject(status);
      });

    return deferred.promise;

  };

  return {
    storeCurrentUser: storeCurrentUser,
    getCurrentUser: getCurrentUser,
    getUsers: getUsers
  };

}]);
