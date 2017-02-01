angular
.module('clementine')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'CurrentUserService'];
function LoginCtrl(User, CurrentUserService) {
  const vm = this;

  vm.login = () => {
    User
      .login(vm.user)
      .$promise
      .then(data => {
        console.log(data.token);
        const user = data.user || null;
        CurrentUserService.saveUser(user, data.token);
      }, err => {
        console.log(err);
      });
  };
}
