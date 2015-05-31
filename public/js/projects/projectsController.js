'use strict';

projectsModule.controller('projectsController', ['$scope', 'projects', function($scope, projects) {

  console.log('called');
  $scope.projects = projects;
  console.log('projects', projects);

}]);
