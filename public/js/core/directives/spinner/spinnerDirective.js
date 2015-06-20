app.directive('cdgdSpinner', ['$timeout', function($timeout) {
  return {
    restrict: 'E',
    scope: {
      show: '=',
      delay: '@'
    },
    templateUrl: 'js/core/directives/spinner/spinner-tpl.html',
    link: function(scope, elem, attrs) {

      var showTimer;

      scope.$watch('show', function(newVal) {
        newVal ? showSpinner() : hideSpinner();
      });

      function showSpinner() {

        if (showTimer) {
          return;
        }

        //Set up a timeout based on our configured delay to show the element (our spinner)
        showTimer = $timeout(showElement.bind(this, true), getDelay());

      }

      function hideSpinner() {

        // If the timer is in progress we need to cancel it to ensure everything stays in sync.
        if (showTimer) {
          $timeout.cancel(showTimer);
        }

        showElement(false);

      }

      function showElement(show) {

        if (show) {
          elem.find('div').addClass('reveal');
        } else {
          elem.find('div').removeClass('reveal');
        }

      }

      function getDelay() {
        var delay = parseInt(scope.delay);
        return isNaN(delay) ? 200 : delay;
      }

    }
  };
}]);
