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
      .then(data => {
        const user = data.user || null;
        CurrentUserService.saveUser(user);
      }, err => {
        console.log(err);
      });
  };
}
