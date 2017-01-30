angular
.module('clementine')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User'];
function RegisterCtrl(User){
  console.log('this');
  const vm = this;
  vm.register = () => {
    User.register(vm.user)
    .$promise
    .then(data => {
      console.log(data);
    }, err => {
      console.log(err);
    });
  };
}
