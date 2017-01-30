angular
  .module('clementine')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService'];
function MainCtrl($rootScope, CurrentUserService) {
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    console.log(vm.user);
  });
}
