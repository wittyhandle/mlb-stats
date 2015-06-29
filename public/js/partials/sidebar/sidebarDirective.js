app.directive('cdgdSidebar', ['userService', 'authService', function(userService, authService) {
  return {
    restrict: 'E',
    templateUrl: 'js/partials/sidebar/sidebar-tpl.html',
    link: function(scope, element, attrs) {

      // these should come from some service

      // TODO when projects get sorted out, remove stateId and use parent of state
      scope.items = [
        {label: 'Projects', id: 'root.admin.projects', stateId: 'root.admin.projects'},
        {label: 'Users', id: 'root.admin.user.list', stateId: 'root.admin.user'}
      ];

      scope.login = userService.getCurrentUser().firstName + ' ' + userService.getCurrentUser().lastName;

      scope.performLogout = function() {
        authService.logout();
      }

    }
  };
}]);
