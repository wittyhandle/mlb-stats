app.directive('cdgdLogin', [function() {
  return {
    controllerAs: 'lf',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'js/login/login-tpl.html',
    controller: ['authService', '$state', function(authService, $state) {

      var lf = this;

      lf.credentials = {username: '', password: ''};

      lf.login = function(credentials) {

        console.log('login called with', credentials);
        authService.login(credentials).then(
          function(user) {
            $state.go('projects');
          },
          function(err) {
            console.log('err', err);
          });

      };

    }]
  };
}]);
