app.directive('cdgdLogin', [function() {
  return {
    controllerAs: 'lf',
    bindToController: true,
    restrict: 'E',
    templateUrl: 'js/login/login-tpl.html',
    controller: ['authService', 'userService', '$state', '_', function(authService, userService, $state, _) {

      var lf = this;

      lf.alerts = [];
      lf.credentials = {username: '', password: ''};

      lf.login = function(credentials) {

        authService.login(credentials).then(
          function(user) {
            userService.storeCurrentUser(user);
            $state.go('admin.user.list');
          },
          function(err) {

            // look for the login error in the list of alerts and remove first before
            // re-showing
            var loginErrors = _.filter(lf.alerts, function(alert) {
              return (alert.code && alert.code === 'login.error');
            });

            if (loginErrors.length > 0) {
              lf.alerts.splice(0, 1);
            }

            lf.alerts.push({msg: 'Invalid Login', type: 'danger', code: 'login.error'});

          });

      };

    }]
  };
}]);
