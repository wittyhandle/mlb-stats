app.directive('cdgdUserAdd', ['userService', '$state', function(userService, $state) {

  return {
    restrict: 'E',
    templateUrl: 'js/partials/users/user-add-tpl.html',
    link: function(scope, element, attrs) {

      scope.user = {};
      scope.addUser = function(valid) {

        if (!valid) return;

        userService.addUser(scope.user)
          .then(function(newUser) {
            $state.go('admin.user.list');
          }).catch(function(err) {
            scope.error = 'bad';
          });

      };

      scope.clearValidation = function() {
        //scope.newUser.$setPristine();
      };

    }
  };

}]);
