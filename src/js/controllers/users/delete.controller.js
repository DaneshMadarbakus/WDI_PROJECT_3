angular
  .module('clementine')
  .controller('usersDeleteCtrl', usersDeleteCtrl);

usersDeleteCtrl.$inject = ['User','$state'];
function usersDeleteCtrl(User, $state) {
  const vm = this;
  User.delete(vm.user)
  .$promise
  .then(
    $state.go('home')
  );

}
