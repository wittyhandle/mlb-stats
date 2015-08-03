app.directive('cdgdUserAdd', ['userService', function(userService) {

  return {
    restrict: 'E',
    templateUrl: 'js/partials/users/user-add-tpl.html',
    link: function(scope, element, attrs) {

      scope.user = {
        firstName: '',
        lastName: '',
        username: '',
        password1: '',
        password2: ''};

      scope.addUser = function(user) {

        // go digging for the form element
        //var form = element.find('form');
        //console.log(form.input);
        console.log(user);

      }

      scope.clearValidation = function() {
        scope.newUser.$setPristine();
      }

    }
  };

}]);
