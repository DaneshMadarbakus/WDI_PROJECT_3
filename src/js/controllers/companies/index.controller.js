angular
  .module('clementine')
  .controller('companiesIndexCtrl', companiesIndexCtrl);

companiesIndexCtrl.$inject = ['Company'];

function companiesIndexCtrl(Company){
  const vm = this;
  vm.hiya = 'yh mate';
  vm.companies = Company.query();
  // Company
  // .query()
  // .$promise
  // .then(response => {
  //   vm.companies = response;
  // });
}
