angular
.module('clementine')
.controller('loginCtrl', loginCtrl);

loginCtrl.$inject = ['User'];
function loginCtrl(User) {
  const vm = this;

  vm.login = () => {
    User.login(vm.user)
    .$promise
    .then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  };

}
