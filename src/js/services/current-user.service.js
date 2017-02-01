angular
  .module('clementine')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', '$rootScope', 'randNameService'];
function CurrentUserService(TokenService, $rootScope, randNameService){
  let currentUser = TokenService.decodeToken();
  const randomUsername = randNameService.rndName();
  return {
    user: currentUser,
    saveUser(user){
      user.id = user.id ? user.id : user._id;
      // user.username = randomUsername;
      currentUser = user;
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
