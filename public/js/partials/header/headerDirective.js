app.directive('cdgdHeader', ['userService', 'authService', function(userService, authService) {
  return {
    restrict: 'E',
    templateUrl: 'js/partials/header/header-tpl.html',
    link: function(scope, element, attrs) {

      scope.login = userService.getCurrentUser().username;

      scope.performLogout = function() {
        authService.logout();
      }
    }
  };
}]);
