app.directive('cdgdUser', ['userService', function(userService) {

  return {
    restrict: 'E',
    templateUrl: 'js/partials/users/user-tpl.html'
  };

}]);
