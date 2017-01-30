angular
.module('clementine')
.controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User'];
function RegisterCtrl(User){
  const vm = this;
  vm.register = function() {
    console.log(vm.user);
    User.register(vm.user)
    .$promise
    .then(data => {
      console.log(data);
  
    });
  };
}
