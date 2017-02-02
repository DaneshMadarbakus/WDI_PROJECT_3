angular
  .module('clementine')
  .controller('companiesIndexCtrl', companiesIndexCtrl);

companiesIndexCtrl.$inject = ['Company', 'TokenService', '$state'];

function companiesIndexCtrl(Company, TokenService, $state){
  const vm = this;
  vm.hiya = 'yh mate';
  vm.companies = Company.query();
  if (!TokenService.getToken()){
    $state.go('login');
  }

}
