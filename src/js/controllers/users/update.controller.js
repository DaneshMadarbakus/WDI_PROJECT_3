angular
  .module('clementine')
  .controller('usersUpdateCtrl', usersUpdateCtrl);

usersUpdateCtrl.$inject = ['User', '$state'];
function usersUpdateCtrl(User, $state) {
  const vm = this;
  User
    .edit(vm.user)
    .$promise
    .then(
      $state.go('usersShow')
    );
}
