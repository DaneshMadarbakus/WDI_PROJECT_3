angular
  .module('clementine')
  .controller('companiesShowCtrl', companiesShowCtrl);
//  .controller('ideasNewCtrl',IdeasNewCtrl);

companiesShowCtrl.$inject = ['Company', '$stateParams'];
function companiesShowCtrl(Company, $stateParams){
  const vm = this;
  vm.company = Company.get($stateParams);
}

// IdeasNewCtrl.$inject = ['API', 'Idea','$stateParams'];
// function IdeasNewCtrl(API, $state, Idea) {
//   const vm  = this;
//
//   vm.create = ideasCreate;
//
//   function ideasCreate(){
//     return Idea
//       .save(vm.idea)
//       .$promise
//       .then(() => {
//         $state.go('companyShow');
//       });
//   }
// }
