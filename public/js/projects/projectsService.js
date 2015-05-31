'use strict';

projectsModule.factory('projectsService', ['$q', '$http', function($q, $http) {

  var getProjects = function() {

    var deferred = $q.defer();

    $http.get('/api/projects')
      .success(function(data, status, headers, config) {
        deferred.resolve(data);
      })
      .error(function(data, status, headers, config) {
        deferred.reject(status);
      });

    return deferred.promise;

  };

  return {
    getProjects: getProjects
  };

}]);
