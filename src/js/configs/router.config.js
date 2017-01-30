angular
  .module('clementine')
  .config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);
  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  })
  .state('usersIndex', {
    url: '/users',
    templateUrl: '/js/views/index.html',
    controller: 'usersIndexCtrl',
    controllerAs: 'usersIndex'
  })
  .state('companyIndex', {
    url: '/companies',
    templateUrl: '/js/views/companies.html',
    controller: 'companiesIndexCtrl',
    controllerAs: 'companiesIndex'
  });

  $urlRouterProvider.otherwise('/');
}
