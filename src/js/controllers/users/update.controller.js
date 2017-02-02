angular
  .module('clementine')
  .controller('usersUpdateCtrl', usersUpdateCtrl);

usersUpdateCtrl.$inject = ['Company', '$state'];
function usersUpdateCtrl() {
  const vm = this;

  vm.update = () => {
    User
      .save(vm.user)
      .$promise
      .then(() => {
        $state.go('companyIndex');
      });
  };
}
