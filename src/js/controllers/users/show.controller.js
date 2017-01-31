angular
  .module('clementine')
  .controller('usersShowCtrl', usersShowCtrl);

usersShowCtrl.$inject = ['User','Company', '$stateParams', '$http', 'API'];
function usersShowCtrl(User, Company, $stateParams, $http, API) {
  const vm = this;

  User.get($stateParams, function(data) {
    vm.user = data;
    console.log(vm.user);
    // extract the companies array, init returned array
    const c = data.companies;
    const returned = [];
    //loop over the ids, request relevant information and pass into returned array.
    for (var i = 0; i < c.length; i++) {
      $http({
        method: 'GET',
        url: `${API}/companies/${data.companies[i]}`
      }).then((data) => {
        console.log(data.data.createdAt);
        data.data.createdAt = createdOnParser(data.data.createdAt);
        returned.push(data.data);
      });
      console.log(returned);
    }
    //assign the returned array to the function to access it in the view.
    vm.items = returned;
  });
}

//make sense of the timestamps.
function createdOnParser(data) {
  console.log('ping');
  console.log(data, 'before');
  var s = data.split('T');
  var date = s[0];
  var time = s[1].split('.')[0];
  return `${date} at ${time}`;
}
