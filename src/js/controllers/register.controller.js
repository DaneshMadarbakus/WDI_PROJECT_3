angular
.module('clementine')
.controller('registerCtrl', registerCtrl);

registerCtrl.$inject = ['User'];
function registerCtrl(User){
  const vm = this;
  vm.register = () => {
    User.register();
  };
}
