app.directive('cdgdSidebar', ['userService', 'authService', '$state', function(userService, authService, $state) {
  return {
    restrict: 'E',
    templateUrl: 'js/partials/sidebar/sidebar-tpl.html',
    link: function(scope, element, attrs) {

      // these should come from some service

      scope.items = [
        //{label: 'Projects', id: 'admin.projects', root: 'projects'},
        {label: 'Users', id: 'admin.user.list', root: 'users'}
      ];

      scope.login = userService.getCurrentUser().firstName + ' ' + userService.getCurrentUser().lastName;

      scope.performLogout = function() {
        authService.logout();
      };

      scope.isActive = function(item) {

        var currentSection = $state.current.name.split('.')[1];
        var itemSection = item.id.split('.')[1];

        return currentSection === itemSection;

      };

    }
  };
}]);
