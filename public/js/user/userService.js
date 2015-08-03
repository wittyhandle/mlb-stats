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

  var addUser = function(user) {

    var deferred = $q.defer();

    $http.post('/api/users/create', user)
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        deferred.reject(status);
      });

    return deferred.promise;

  };

  var userExists = function(username) {

    var deferred = $q.defer();

    $http.get('/api/users/exists/' + username)
      .success(function(data, status, headers, config) {

        if (data.found == true) {
          console.log('reject it');
          deferred.reject(false);
        } else {
          console.log('resolve it');
          deferred.resolve(true);
        }

      })
      .error(function(data, status, header, config) {
        deferred.reject(status);
      });

    return deferred.promise;

  };

  return {
    storeCurrentUser: storeCurrentUser,
    getCurrentUser: getCurrentUser,
    getUsers: getUsers,
    userExists: userExists,
    addUser: addUser
  };

}]);
