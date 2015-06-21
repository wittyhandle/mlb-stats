app.directive('cdgdUsers', ['$timeout', 'userService', function($timeout, userService) {

  return {
    restrict: 'E',
    templateUrl: 'js/partials/users/users-tpl.html',
    link: function(scope, element, attrs) {

      scope.users = null;

      userService.getUsers().then(function(users) {
        console.log(users);
        scope.users = users;
      });
    }
  };

}]);
