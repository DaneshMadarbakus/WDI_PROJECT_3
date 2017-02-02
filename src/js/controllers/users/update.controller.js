angular
  .module('clementine')
  .controller('usersUpdateCtrl', usersUpdateCtrl);

usersUpdateCtrl.$inject = ['User', '$state', '$stateParams'];
function usersUpdateCtrl(User, $state) {
  const vm = this;
  vm.update = () => {
    User.edit('$stateParams')
    .$promise
    .then(
      $state.go('usersShow')
    );
  };
}
