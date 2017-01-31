angular
  .module('clementine')
  .controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['User','Company', '$stateParams'];
function usersShowCtrl(User, Company, $stateParams) {
  const vm = this;

  User.get($stateParams, function(data) {
    vm.user = data;
    console.log(vm.user);

    vm.company = Company.get(data.companies);
    console.log(vm.company);

  });
}
