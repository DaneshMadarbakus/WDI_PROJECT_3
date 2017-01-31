angular
  .module('clementine')
  .controller('userShowCrtl', userShowCtrl);

userShowCtrl.$inject = ['User', '$stateParams'];
function userShowCtrl(User, $stateParams) {
  const vm = this;
  vm.User = User.get($stateParams);
  console.log(vm.User);
}
