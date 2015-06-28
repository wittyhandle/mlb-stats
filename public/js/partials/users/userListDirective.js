app.directive('cdgdUserList', ['userService', function(userService) {

  return {
    restrict: 'E',
    templateUrl: 'js/partials/users/user-list-tpl.html',
    link: function(scope, element, attrs) {

      scope.users = null;

      userService.getUsers().then(function(users) {
        scope.users = users;
      });
    }
  };

}]);
