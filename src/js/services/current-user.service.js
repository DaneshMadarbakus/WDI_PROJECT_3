angular
  .module('clementine')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService'];
function CurrentUserService(TokenService){

}
