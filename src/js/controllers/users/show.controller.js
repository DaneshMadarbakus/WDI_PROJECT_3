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
    vm.items.forEach(item => {
      item.createdAt = createdOnParser(item.createdAt);
    });
  });


}

//make sense of the timestamps.
function createdOnParser(data) {
  var str  = data.split('T');
  var date = str[0];
  var time = str[1].split('.')[0];
  return `${date} at ${time}`;
}
