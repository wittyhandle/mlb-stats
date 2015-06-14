'use strict';

userModule.factory('userService', [function() {

  var currentUser = null;

  var storeCurrentUser = function(user) {
    console.log('current user', user);
    currentUser = user;
  };

  var getCurrentUser = function() {
    return currentUser;
  };

  return {
    storeCurrentUser: storeCurrentUser,
    getCurrentUser: getCurrentUser
  };

}]);
