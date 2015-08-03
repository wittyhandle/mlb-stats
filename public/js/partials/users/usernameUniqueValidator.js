app.directive('usernameUniqueValidator', ['userService', function(userService) {

  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {

      ngModel.$asyncValidators.userExists = function(modelValue, fieldValue) {
        var value = modelValue || fieldValue;
        return userService.userExists(value);
      };

    }
  };

}]);
