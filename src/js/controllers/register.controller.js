angular
.module('clementine')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService'];
function RegisterCtrl(User, CurrentUserService){
  const vm = this;

  vm.register = () => {
    User
      .register(vm.user).$promise
      .then((data) => {
        const user = data.user || null;
        CurrentUserService.saveUser(user);
      }, err => {
        console.log(err);
      });
  };
}
