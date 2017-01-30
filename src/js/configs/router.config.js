angular
  .module('clementine')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $stateProvider
  .state('home', {
    url: '/', templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register', templateUrl: '/js/views/register.html', controller: 'registerCtrl', controllerAs: 'register'
  })
  .state('login', {
    url: '/login', templateUrl: '/js/views/login.html', controller: 'loginCtrl', controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users', templateUrl: '/js/views/index.html', controller: 'usersIndexCtrl', controllerAs: 'usersIndex'
  });



}
