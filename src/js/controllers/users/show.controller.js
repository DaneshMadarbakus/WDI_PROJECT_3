angular
  .module('clementine')
  .controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['User','Company', '$stateParams','API'];
function usersShowCtrl(User, Company, $stateParams, API) {
  const vm = this;

  //fetch the user and companies.
  User
  .get($stateParams)
  .$promise
  .then(response => {
    console.log(response);
    vm.user = response;
    vm.items = response.companies;
  });
}
