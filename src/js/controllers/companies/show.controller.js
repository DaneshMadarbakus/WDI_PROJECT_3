angular
  .module('clementine')
  .controller('companiesShowCtrl', companiesShowCtrl);
//  .controller('ideasNewCtrl',IdeasNewCtrl);

companiesShowCtrl.$inject = ['Company', '$stateParams', '$http', 'API', 'randNameService'];
function companiesShowCtrl(Company, $stateParams, $http, API, randNameService){
  const vm      = this;
  vm.company    = Company.get($stateParams);
  console.log(vm.company);
  vm.idea = {};
  vm.upvote     = upVote;
  vm.downvote   = downVote;
  vm.addIdea    = addIdea;
  vm.toShow     = 10;
  vm.sortBy     = '-createdAt';

  //Menu functionality
  vm.originatorEvent = null;
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
    console.log('ping');
    vm.sortBy = sortType;
    console.log(vm.sortBy);
  };


  //Idea functions
  function ideaRanker(ideas) {
    if (typeof(ideas) !== 'object') throw 'Ideas should be an object';
    for (var i = 0; i < ideas.length; i++) {
      emptyChecker(ideas[i]);
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


  function addIdea() {
    vm.idea.randomUsername = randNameService.rndName();
    $http
      .post(`${API}/companies/${$stateParams.id}/ideas`, {idea: vm.idea})
      .then((response) => {
        console.log(response.data);
        vm.company.ideas.push(response.data);
      });
  }

  function upVote(ideaId) {
    $http
      .put(`${API}/companies/${$stateParams.id}/ideas/${ideaId}/upvote`)
      .then(() => {
        vm.company   = Company.get($stateParams);
      });
  }

  function downVote(ideaId) {
    $http
      .put(`${API}/companies/${$stateParams.id}/ideas/${ideaId}/downvote`)
      .then(() => {
        vm.company   = Company.get($stateParams);
      });
  }
}
