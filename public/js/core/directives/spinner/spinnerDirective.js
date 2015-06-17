app.directive('cdgdSpinner', [function() {
  return {
    restrict: 'E',
    scope: {
      show: '='
    },
    templateUrl: 'js/core/directives/spinner/spinner-tpl.html'
  };
}]);
