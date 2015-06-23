app.directive('cdgdSidebar', ['userService', 'authService', function(userService, authService) {
  return {
    restrict: 'E',
    templateUrl: 'js/partials/sidebar/sidebar-tpl.html',
    link: function(scope, element, attrs) {

      // these should come from some service
      scope.items = [
        {label: 'Projects', id: 'root.admin.projects'},
        {label: 'Users', id: 'root.admin.users'}
      ];

      console.log('the current user', userService.getCurrentUser());
      scope.login = userService.getCurrentUser().firstName + ' ' + userService.getCurrentUser().lastName;

      scope.performLogout = function() {
        authService.logout();
      }

    }
  };
}]);
