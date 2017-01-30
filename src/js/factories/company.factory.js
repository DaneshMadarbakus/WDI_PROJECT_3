angular
.module('clementine')
.factory('Company', companyFactory);

companyFactory.$inject = ['API', '$resource'];

function companyFactory(API, $resource) {
  return $resource(`${API}/companies/:id`, {id: '@_id'});
}
