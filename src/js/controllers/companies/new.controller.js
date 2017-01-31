angular
  .module('clementine')
  .controller('companiesNewCtrl', companiesNewCtrl);

companiesNewCtrl.$inject = ['Company', '$state'];
function companiesNewCtrl(Company, $state){
  const vm = this;
  
  vm.create = () => {
    Company
      .save(vm.company)
      .$promise
      .then(() => {
        $state.go('companyIndex');
      });
  };
}
