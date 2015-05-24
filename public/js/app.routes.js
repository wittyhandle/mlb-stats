// Application Level State
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

  $urlRouterProvider.when('', '/login');
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'js/login/login.html',
      controller: 'loginController'
    });

}]);