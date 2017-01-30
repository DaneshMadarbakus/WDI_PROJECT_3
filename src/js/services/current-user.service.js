angular
  .module('clementine')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', '$rootScope', 'User'];
function CurrentUserService(TokenService, $rootScope, User){
  const self = this;
  self.getUser = () => {
    const decoded = TokenService.decodeToken();
    console.log(decoded);

    if(decoded){
      User
      .get({id: decoded}).$promise
      .then(data => {
        console.log(data);
      });
    }
  };
}
