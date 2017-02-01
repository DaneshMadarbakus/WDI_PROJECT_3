angular
  .module('clementine')
  .controller('companyDashCtrl', companyDashCtrl);

companyDashCtrl.$inject = ['User','Company', '$stateParams', '$http', 'API', '$scope'];
function companyDashCtrl(User, Company, $stateParams, $http, API, $scope) {
  const vm = this;
  vm.kek = 'LOL';
  vm.company;
  vm.previewStringLength = 20;
  vm.chartData   = [];
  vm.chartLabels = [];
  //fetch the user.
  $http({
    method: 'GET',
    url: `${API}/users/${$stateParams.id}`
  }).then((data) => {
    vm.user = data;
  });
  //and the company
  $http({
    method: 'GET',
    url: `${API}/companies/${$stateParams.company_id}`
  }).then((data)=> {
    vm.company = data;
    ideaRanker(data.data.ideas);
    vm.list = data.data.ideas;
    console.log(vm.list[0].idea);
  }).then(() => {
    for (var i = 0; i < vm.list.length; i++) {
      vm.chartData.push(vm.list[i].score);

      vm.chartLabels.push(`
        ${limitString(vm.list[i].username, vm.previewStringLength)}
        `);
    }
    console.log(vm.chartLabels);
  });
}


function limitString(string, length) {
  const str = string.substring(0, length);
  return `${str}...`;
}


function knuthShuffle(array) {
  var a = array;
  var n = a.length;
  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = a[i];
    a[i] = a[j];
    a[j] = tmp;
  }
  return a;
}

function setOrder(order, array) {
  console.log('set order');
  if (order === 'rand') {
    return true;
  }
}

//Work out the super clever 'ideaScore' rating of each idea lol.
function ideaRanker(ideas) {
  if (typeof(ideas) !== 'object') throw 'Ideas should be an object';
  for (var i = 0; i < ideas.length; i++) {
    emptyChecker(ideas[i]);

    ideas[i].engage = ideas[i].upvotes + ideas[i].downvotes;
    ideas[i].score  = ideas[i].upvotes - ideas[i].downvotes;
    //and some other chart related arrays
  }
}

//test for empty array and rpelace with 0, else assign no votes.
function emptyChecker(idea) {
  if (idea.upvotes.length === 0) idea.upvotes = 0;
  else idea.upvotes = idea.upvotes.length;
  if (idea.downvotes.length === 0) idea.downvotes = 0;
  else idea.downvotes = idea.downvotes.length;
}
