angular
  .module('clementine')
  .controller('companiesShowCtrl', companiesShowCtrl);

companiesShowCtrl.$inject = ['Company', '$stateParams'];

function companiesShowCtrl(Company, $stateParams){
  const vm = this;
  vm.company = Company.get($stateParams);
}
