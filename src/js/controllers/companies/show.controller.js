angular
  .module('clementine')
  .controller('companiesShowCtrl', companiesShowCtrl);
//  .controller('ideasNewCtrl',IdeasNewCtrl);

companiesShowCtrl.$inject = ['Company', '$stateParams', '$http', 'API', 'randNameService'];
function companiesShowCtrl(Company, $stateParams, $http, API, randNameService){
  const vm        = this;
  Company.get($stateParams).$promise.then((data) => {
    console.log(data);
    ideaRanker(data.ideas);
    vm.company = data;
  });

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
      ideas[i].createdAt = createdOnParser(ideas[i].createdAt);
      ideas[i].score  = ideas[i].upvotes - ideas[i].downvotes;
      ideas[i].engage = ideas[i].upvotes + ideas[i].downvotes;
    }
  }


  //make sense of the timestamps.
  function createdOnParser(data) {
    var str  = data.split('T');
    var date = str[0];
    var time = str[1].split('.')[0];
    return `${date} at ${time}`;
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
