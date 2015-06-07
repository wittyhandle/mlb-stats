app.directive('cdgdAlert', [function() {
  return {
    controllerAs: 'alert',
    bindToController: true,
    restrict: 'E',
    scope: {
      message: '@'
    },
    templateUrl: 'js/core/directives/alert/alert-tpl.html',
    link: [function() {}]
  };
}]);
