angular
  .module('clementine')
  .service('CurrentUserService', CurrentUserService);

CurrentUserService.$inject = ['TokenService', '$rootScope'];
function CurrentUserService(TokenService, $rootScope){
  let currentUser = TokenService.decodeToken();

  return {
    user: currentUser,
    saveUser(user){
      console.log('saving user');
      user.id = user.id? user.id : user._id;
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
