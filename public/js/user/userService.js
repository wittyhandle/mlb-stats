'use strict';

userModule.factory('userService', ['$timeout', '$q', function($timeout, $q) {

  var currentUser = null;

  var storeCurrentUser = function(user) {
    currentUser = user;
  };

  var getCurrentUser = function() {
    return currentUser;
  };

  var getUsers = function() {

    var deferred = $q.defer();

    $timeout(function() {
      deferred.resolve([{id: 1, user: 'fred'}]);
    }, 1000);

    return deferred.promise;

  };

  return {
    storeCurrentUser: storeCurrentUser,
    getCurrentUser: getCurrentUser,
    getUsers: getUsers
  };

}]);
