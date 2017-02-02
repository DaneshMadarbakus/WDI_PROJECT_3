angular
  .module('clementine')
  .controller('usersUpdateCtrl', usersUpdateCtrl);

usersUpdateCtrl.$inject = ['User', '$state', '$stateParams'];
function usersUpdateCtrl(User, $state, $stateParams) {
  const vm = this;
  User
  .get($stateParams)
  .$promise
  .then(response => {
    vm.user = response;
  });


  vm.update = () => {
    User
    .update($stateParams, { user: vm.user })
    .$promise
    .then(data => {
      //need to put stateparamas to get user back to page as we need the id for the revelant page.
      $state.go('usersShow', $stateParams);
    });
  };
}
