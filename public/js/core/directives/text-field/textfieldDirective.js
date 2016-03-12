app.directive('cdgdTextfield', ['$log', '$parse', function($log, $parse) {
  return {
    restrict: 'E',
    scope: {
      field: '=',
      label: '@',
      type: '=?',
      required: '=?',
      validators: '@'
    },
    require: '^form',
    templateUrl: 'js/core/directives/text-field/text-field-tpl.html',
    link: function(scope, elem, attrs, formCtrl) {

      scope.required = angular.isDefined(attrs.required) ? attrs.required : 'true';

      scope.type = typeof attrs.type !== 'undefined' ? attrs.type : 'text';

      //scope.validators = typeof attrs.validators !== 'undefined' ? attrs.validators : ['ng-required="true"'];
      //scope.validators = "monkey";
      //$log.debug('elem', );

      var w = $parse(attrs.validators);
      $log.debug('w', w);

      if (angular.isDefined(attrs.validators)) {

        $log.debug('found validators', attrs.validators);
        angular.forEach(attrs.validators, function(v) {
          $log.debug('this validator', v);
          elem.find('input').attr(v, '');
        });

      }

      var fieldName = attrs.field;
      scope.name = fieldName.split('.')[1];

      scope.clearValidation = function() {
        formCtrl.$setPristine();
      }

    }
  };
}]);
