angular
  .module('clementine')
  .controller('usersUpdateCtrl', usersUpdateCtrl);

usersUpdateCtrl.$inject = ['User', '$state', '$stateParams'];
function usersUpdateCtrl(User, $state) {
  User.edit('$stateParams')
    .$promise
    .then(
      $state.go('usersShow')
    );
}
