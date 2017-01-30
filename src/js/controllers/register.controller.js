angular
.module('clementine')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService'];
function RegisterCtrl(User){
  const vm = this;
  vm.register = function(CurrentUserService) {
    console.log(vm.user);
    User
    .register(vm.user).$promise
    .then(() => {
      CurrentUserService.getUser();
    }, err => {
      console.log(err);
    });
  };
}
