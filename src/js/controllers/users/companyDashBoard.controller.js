angular
  .module('clementine')
  .controller('companyDashCtrl', companyDashCtrl);

companyDashCtrl.$inject = ['User','Company', '$stateParams', '$http', 'API', '$scope'];
function companyDashCtrl(User, Company, $stateParams, $http, API, $scope) {
  const vm = this;
  vm.kek = 'LOL';
  vm.company;
  vm.previewStringLength = 20;
  vm.sentChartData     = [];
  vm.chartLabels       = [];
  vm.engageChartData   = [];
  vm.engageChartLabels = [];
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
      //Push the sent chart data.
      vm.sentChartData.push(`
        ${removeNegativeValue(vm.list[i].score)}
        `);

      //Push the engagement chart data.
      vm.engageChartData.push(vm.list[i].engage);
      vm.engagechartLabels.push(`
        ${limitString(vm.list[i].idea, vm.previewStringLength)}
        `);
    }
    console.log(vm.sentChartLabels);
  });
}

function removeNegativeValue(val) {
  if (val < 1) return true;
  else return val;
}

function limitString(string, length) {
  const str = string.substring(0, length);
  return `${str}...`;
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
