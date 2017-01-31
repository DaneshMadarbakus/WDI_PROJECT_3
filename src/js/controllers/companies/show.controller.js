angular
  .module('clementine')
  .controller('companiesShowCtrl', companiesShowCtrl);
//  .controller('ideasNewCtrl',IdeasNewCtrl);

companiesShowCtrl.$inject = ['Company', '$stateParams', '$http', 'API'];
function companiesShowCtrl(Company, $stateParams, $http, API){
  const vm     = this;
  vm.company   = Company.get($stateParams);
  vm.upvote    = upVote;
  vm.downvote  = downVote;
  vm.addIdea   = addIdea;

  function addIdea() {
    $http
      .post(`${API}/companies/${$stateParams.id}/ideas`, {idea: vm.idea})
      .then((response) => {
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
