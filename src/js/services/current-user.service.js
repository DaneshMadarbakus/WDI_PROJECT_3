angular
  .module('clementine')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', '$rootScope', 'randNameService'];
function CurrentUserService(TokenService, $rootScope, randNameService){
  let currentUser = TokenService.decodeToken();
  return {
    user: currentUser,
    saveUser(user){
      const randomUsername = randNameService.rndName();
      user.id = user.id ? user.id : user._id;
      user.username = randomUsername;
      console.log(user.username);
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
