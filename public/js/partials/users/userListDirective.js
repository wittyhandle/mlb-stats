app.directive('cdgdUserList', ['userService', '$modal',

  function(userService, $modal) {

    return {
      restrict: 'E',
      templateUrl: 'js/partials/users/user-list-tpl.html',
      link: function(scope, element, attrs) {

        scope.users = null;

        userService.getUsers().then(function(users) {
          scope.users = users;
        });

        scope.editUser = function(user) {

          var modalInstance = $modal.open({
            animation: false,
            templateUrl: 'js/partials/users/user-edit-tpl.html',
            controller: 'editUserController',
            size: 'lg',
            resolve: {
              user: function() {
                return user;
              }
            }
          });

        }

      }
    };

}]).controller('editUserController', ['$scope', '$modalInstance', 'user',

  function($scope, $modalInstance, user) {

    $scope.name = user.firstName + ' ' + user.lastName;
    $scope.user = angular.copy(user);

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };

    $scope.postEditUser = function(valid) {

      if (valid) {
        console.log('This is the edited user', valid);
        $modalInstance.close();
      }

    };

    $scope.clearValidation = function() {
      $scope.editUserForm.$setPristine();
    };

}]);
