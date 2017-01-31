angular
.module('clementine')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
  const vm = this;
  vm.user = CurrentUserService.getUser();

  $rootScope.$on('loggedIn', () => {
    console.log('logged in');
    vm.user = CurrentUserService.user;
    $state.go('companyIndex');
  });

  $rootScope.$on('loggedOut', () => {
    console.log('logged out');
    vm.user = null;
    $state.go('login');
  });


  vm.logout = () => {
    CurrentUserService.clearUser();
  };
}
