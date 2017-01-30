angular
.module('clementine')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User', 'TokenService'];
function LoginCtrl(User, TokenService) {
  const vm = this;

  vm.login = () => {
    console.log('I work! Sort of.');
    User.login(vm.user)
    .$promise
    .then(data => {
      console.log(data);
      TokenService.setToken(data.token);
    });
  };
}
