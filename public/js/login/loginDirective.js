app.directive('cdgdLogin', [function() {
  return {
    controllerAs: 'lf',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'js/login/login-tpl.html',
    controller: ['authService', '$state', function(authService, $state) {

      var lf = this;

      lf.credentials = {username: '', password: ''};
      lf.invalidLogin = false;

      lf.login = function(credentials) {

        authService.login(credentials).then(
          function(user) {

            // save the user to the rootscope for use by other directives

            $state.go('projects');
          },
          function(err) {
            console.log('in error');
            lf.invalidLogin = true;
          });

      };

    }]
  };
}]);
