app.directive('cdgdHeader', ['userService', function(userService) {
  return {
    restrict: 'E',
    templateUrl: 'js/partials/header/header-tpl.html',
    link: function(scope, element, attrs) {

      console.log('here', userService.getCurrentUser());

      scope.login = userService.getCurrentUser().username;
    }
  };
}]);
