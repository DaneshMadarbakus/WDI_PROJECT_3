angular
  .module('clementine')
  .controller('companyDashCtrl', companyDashCtrl);

companyDashCtrl.$inject = ['User','Company', '$stateParams', '$http', 'API', '$scope'];
function companyDashCtrl(User, Company, $stateParams, $http, API) {
  const vm = this;
  vm.kek = 'LOL';
  vm.company = null;
  vm.previewStringLength = 20;
  vm.sentChartData     = [];
  vm.chartLabels       = [];
  vm.engageChartData   = [];
  vm.engageChartLabels = [];
  vm.ideaButtonText    = 'Toggle Ideas';
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
      console.log(vm.list[i].score);
      vm.sentChartData.push(vm.list[i].score);
      // (`
      //   ${removeNegativeValue(vm.list[i].score)}
      //   `);

      //Push the engagement chart data.
      vm.engageChartData.push(vm.list[i].engage);
      vm.engageChartLabels.push(`
        ${limitString(vm.list[i].idea, vm.previewStringLength)}
        `);
    }
    console.log(vm.sentChartLabels);
  });

  vm.originatorEvent;
  vm.openMenu = function($mdMenu, e) {
    vm.originatorEvent = e;
    $mdMenu.open(e);

    //set max number of ideas to be shown
  };
  vm.maxNum = function(int) {
    vm.toShow = int;
    console.log(vm.toShow);
  };

  vm.sortMethod = function(sortType) {
    vm.sortBy = sortType;
  };


  vm.toggleIdeaText = function() {
    if (vm.ideaButtonText === 'Show Ideas') vm.ideaButtonText = 'Hide Ideas';
    if (vm.ideaButtonText === 'Hide Ideas') vm.ideaButtonText = 'Show Ideas';
    return true;
  };
}

function removeNegativeValue(val) {
  console.log(val);
  if (val < 1) console.log(val);
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
