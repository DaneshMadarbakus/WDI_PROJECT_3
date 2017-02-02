angular
  .module('clementine')
  .controller('usersUpdateCtrl', usersUpdateCtrl);

usersUpdateCtrl.$inject = ['User', '$state', '$stateParams'];
function usersUpdateCtrl(User, $state) {
  const vm = this;
<<<<<<< HEAD
  User
    .edit('$stateParams')
    .$promise
    .then(
      $state.go('usersShow')
    );
=======

  vm.update = () => {
    User
      .save(vm.user)
      .$promise
      .then(() => {
        $state.go('companyIndex');
      });
  };
>>>>>>> 1892cba6ab28ba40e97a0ce8fadf2b75f871bf78
}
