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

      scope.$watch('show', function(newVal, oldVal) {
        //console.log('oldVal is ' + oldVal + ' and newVal is ' + newVal);
        //if (newVal !== oldVal) {
          newVal ? showSpinner() : hideSpinner();
        //} else {
        //  console.log('values match', newVal);
        //  showSpinner();
        //}

      });

      function showSpinner() {

        if (showTimer) {
          console.log('return from showSpinner early');
          return;
        }
        //console.log(elem.css());
        //Set up a timeout based on our configured delay to show the element (our spinner)
        showTimer = $timeout(showElement.bind(this, true), getDelay());
        //showElement(true);
      }

      function hideSpinner() {

        // If the timer is in progress we need to cancel it to ensure everything stays in sync.
        if (showTimer) {
          $timeout.cancel(showTimer);
        }

        //showTimer = null;
        showElement(false);

      }

      function showElement(show) {
        console.log('ready to showElement', show);
        //show ? elem.css({display:'block'}) : elem.css({display:'none'});

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
