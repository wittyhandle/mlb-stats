app.directive('cdgdSidebar', [function() {
  return {
    restrict: 'E',
    templateUrl: 'js/partials/sidebar/sidebar-tpl.html',
    link: function(scope, element, attrs) {

      // these should come from some service
      var menuItems = [
        {label: 'Projects', id: 'projects'},
        {label: 'Users', id: 'users'}
      ];

      scope.items = menuItems;

    }
  };
}]);
