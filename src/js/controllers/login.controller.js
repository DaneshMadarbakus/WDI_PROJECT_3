angular
.module('clementine')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService'];
function LoginCtrl(User, CurrentUserService) {
  const vm = this;

  vm.login = () => {
    console.log(vm.user);
    User
      .login(vm.user)
      .$promise
      .then(() => {
        CurrentUserService.getUser();
      }, err => {
        console.log(err);
      });
  };
}
