app.directive('usernameUniqueValidator', ['userService', function(userService) {

  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {

      ngModel.$parsers.push(function(value) {

        userService.userExists(value).then(function(status) {
          console.log('this is the status', status);
          ngModel.$setValidity('username-unique', !status.found);
          return value;
        });

      });

    }
  };

}]);
