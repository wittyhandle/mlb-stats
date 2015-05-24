'use strict';

app.factory('authService', ['$q', '$timeout', '$http', function($q, $timeout, $http) {

  var login = function(credentials) {

    var deferred = $q.defer();
    
    $timeout(function() {
      // return a hardcoded user for now
      var me = {user: 'mike', role: 'admin'};
      deferred.resolve(me);
    }, 2000);

    return deferred.promise;

  };

  return {
    login: login
  };

}]);