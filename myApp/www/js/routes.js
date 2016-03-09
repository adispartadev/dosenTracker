angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

  .state('loginAccount', {
    url: '/login',
    templateUrl: 'templates/loginAccount.html',
    controller: 'loginAccountCtrl'
  })

  .state('signupAccount', {
    url: '/registerUserData',
    templateUrl: 'templates/signupAccount.html',
    controller: 'signupAccountCtrl'
  })

  .state('selectYourArea', {
    url: '/registerArea',
    templateUrl: 'templates/selectYourArea.html',
    controller: 'selectYourAreaCtrl'
  })

  .state('locationList', {
    url: '/locationList',
    templateUrl: 'templates/locationList.html',
    controller: 'locationListCtrl'
  })

  .state('locationDetail', {
    url: '/locationDetail',
    templateUrl: 'templates/locationDetail.html',
    controller: 'locationDetailCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

$urlRouterProvider.otherwise('/login')

  

});