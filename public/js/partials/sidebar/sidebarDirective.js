app.directive('cdgdSidebar', [function() {
  return {
    restrict: 'E',
    templateUrl: 'js/partials/sidebar/sidebar-tpl.html',
    link: function(scope, element, attrs) {

      // these should come from some service
      scope.items = [
        {label: 'Projects', id: 'root.projects'},
        {label: 'Users', id: 'root.users'}
      ];
    }
  };
}]);
