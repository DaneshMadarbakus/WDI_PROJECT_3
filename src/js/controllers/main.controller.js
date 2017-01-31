angular
  .module('clementine')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    $state.go('companyIndex');
    console.log(vm.user);
  });
  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('login');
  });
}
