angular
  .module('clementine')
  .controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['User','Company', '$stateParams', '$http'];
function usersShowCtrl(User, Company, $stateParams, $http) {
  const vm = this;

  User.get($stateParams, function(data) {
    vm.user = data;
    console.log(vm.user);
    // extract the companies array.
    const c = data.companies;
    // init an empty array for the returned companies objects.
    const returned = [];
    //loop over the ids, request relevant information and pass into returned array.
    for (var i = 0; i < c.length; i++) {
      $http({
        method: 'GET',
        url: `http://localhost:3000/api/companies/${data.companies[i]}`
      }).then((data) => {
        console.log(data.data);
        returned.push(data.data);
      });
    }
    //assign the returned array to the function to access it in the view.
    vm.companyData = returned;
  });
}

function createdOn() {

}
