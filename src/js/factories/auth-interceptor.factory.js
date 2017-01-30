angular
.module('clementine')
.factory('AuthInterceptor', AuthInterceptor);

AuthInterceptor.$inject = ['API'];
function AuthInterceptor(API){
  return {
    request(config){
      return config;
    },
    response(res){
      if(res.config.url.indexOf(API) === 0 && res.data.token){
        console.log(res.data.token);
      }
      return res;
    }
  };
}
