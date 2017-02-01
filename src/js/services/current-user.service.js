angular
  .module('clementine')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', '$rootScope', 'randNameService'];
function CurrentUserService(TokenService, $rootScope, randNameService){
  let currentUser = TokenService.decodeToken();
  return {
    user: currentUser,
    saveUser(user, token){
      user.id = user.id ? user.id : user._id;
      currentUser = user;
      TokenService.setToken(token);
      $rootScope.$broadcast('loggedIn');
    },
    getUser(){
      return currentUser;
    },
    clearUser(){
      currentUser = null;
      TokenService.clearToken();
      $rootScope.$broadcast('loggedOut');
    }
  };
}
