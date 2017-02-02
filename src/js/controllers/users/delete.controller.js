angular
  .module('clementine')
  .controller('usersDeleteCtrl', usersDeleteCtrl);

usersDeleteCtrl.$inject = ['User','$state', '$stateParams', 'TokenService'];
function usersDeleteCtrl(User, $state, $stateParams, TokenService) {
  const vm = this;
  vm.delete = () =>{
    User.delete($stateParams)
    .$promise
    .then(
      TokenService.clearToken()
    );
  };
}
