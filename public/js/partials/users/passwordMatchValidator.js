app.directive('passwordMatchValidator', [function() {

  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {

      ngModel.$parsers.push(function(value) {
        console.log('the val', value);
        console.log('the val of the first', scope.$eval('user.password1'));
        ngModel.$setValidity('password-match', value == scope.$eval('user.password1'));
        return value;
      });

    }
  };

}]);
