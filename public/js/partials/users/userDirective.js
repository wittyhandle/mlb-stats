app.directive('cdgdUsers', ['$timeout', 'userService', function($timeout, userService) {

  return {
    restrict: 'E',
    templateUrl: 'js/partials/users/users-tpl.html',
    link: function(scope, element, attrs) {

      scope.busy = true;

      var users = userService.getUsers().then(function(users) {
        scope.busy = false;
      });
    }
  };

}]);
