app.directive('passwordMatchValidator', [function() {

  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {

      ngModel.$parsers.push(function(value) {
        ngModel.$setValidity('password-match', value == scope.$eval('user.password1'));
        return value;
      });

    }
  };

}]);
