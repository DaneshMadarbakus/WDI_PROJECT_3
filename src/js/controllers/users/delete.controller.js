angular
  .module('clementine')
  .controller('usersDeleteCtrl', usersDeleteCtrl);

usersDeleteCtrl.$inject = ['User','$state', '$stateParams', 'CurrentUserService'];
function usersDeleteCtrl(User, $state, $stateParams, CurrentUserService) {
  const vm = this;
  vm.delete = () =>{
    User.delete($stateParams)
    .$promise
    .then(() => {
      console.log('running');
      CurrentUserService.clearUser();
      $state.go('home');
    });
  };
}
