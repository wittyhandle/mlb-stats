app.directive('cdgdUsers', ['userService', function(userService) {

  return {
    restrict: 'E',
    templateUrl: 'js/partials/users/users-tpl.html',
    link: function(scope, element, attrs) {

      scope.users = null;

      userService.getUsers().then(function(users) {
        scope.users = users;
      });
    }
  };

}]);
