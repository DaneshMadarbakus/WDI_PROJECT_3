angular
.module('clementine')
.factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = [];
function AuthInterceptor(){
  return {
    request(config){
      return config;
    },
    response(res){
      return res;
    }
  };
}
