app.directive('cdgdUsers', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    templateUrl: 'js/partials/users/users-tpl.html',
    controller: ['$scope', function($scope) {



    }],
    link: function(scope, element, attrs) {

      scope.busy = true;

      $timeout(function(){
        scope.busy = false;
        scope.thing = 'this';
      }, 2000);

    }
  };
}]);
