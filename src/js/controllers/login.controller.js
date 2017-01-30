angular
.module('clementine')
.controller('LoginCtrl', LoginCtrl);

LoginCtrl.$inject = ['User'];
function LoginCtrl(User) {
  const vm = this;

  vm.login = () => console.log('I work! Sort of.')
    User.login(vm.user)
    .$promise
    .then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  };

}
