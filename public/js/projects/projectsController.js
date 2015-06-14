'use strict';

projectsModule.controller('projectsController', ['$scope', 'projects', function($scope, projects) {

  $scope.projects = projects;
  
}]);
