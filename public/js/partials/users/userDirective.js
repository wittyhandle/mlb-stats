app.directive('cdgdUsers', ['$timeout', 'userService', function($timeout, userService) {

  return {
    restrict: 'E',
    templateUrl: 'js/partials/users/users-tpl.html',
    link: function(scope, element, attrs) {

      //scope.loaded = false;
      //$timeout(function(){
      //
      //  scope.busy = true;
      //  $timeout(function(){
      //
      //    scope.busy = false;
      //    scope.loaded = true;
      //    console.log('busy is now', scope.busy);
      //
      //  }, 1000);
      //
      //}, 100);

      scope.busy = false;
      scope.busy = true;
      var users = userService.getUsers().then(function(users) {
        console.log('users', users);
        scope.busy = false;
      });


      //scope.makeCall = function() {
      //  scope.busy = true;
      //
      //  $timeout(function(){
      //    scope.busy = false;
      //    scope.thing = 'this';
      //  }, 1000);
      //}

    }
  };

}]);
