angular
  .module('clementine')
  .controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['User', '$stateParams'];
function usersShowCtrl(User, $stateParams) {
  const vm = this;

  User.get($stateParams, function(data) {
    vm.user = data;
  });

  vm.lol  = 'lol';

}
