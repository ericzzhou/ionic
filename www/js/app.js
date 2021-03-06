// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'ngCordova', 'LocalStorageModule', 'ui.router'])

.run(function ($ionicPlatform) {
  $ionicPlatform.ready(function () {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function ($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'index.html',
      controller: 'AppCtrl'
    })
 .state('app.start', {
   url: '/start',
   templateUrl: 'templates/start.html',
   controller: 'StartController'
 })
  .state('app.main', {
    url: '/main',
    templateUrl: 'templates/main.html',
    controller: 'MainController'
  })
  .state('app.POItemSearch', {
    url: '/POItemSearch',
    templateUrl: 'templates/POItemSearch.html',
    controller: 'POItemSearchController'
  })

    .state('app.POInventory', {
      url: '/Inventory',
      templateUrl: 'templates/POInventory.html',
      controller: 'POInventoryController'
    })

    .state('app.ViewPOReceive', {
      url: '/ViewPOReceive',
      templateUrl: 'templates/ViewPOReceive.html',
      controller: 'ViewPOReceiveController'
    })

  .state('app.welcome', {
    url: '/welcome',
    views: {
      'menuContent': {
        templateUrl: 'templates/welcome.html',
        controller: 'WelcomeController'
      }
    }
  })

   .state('app.camera', {
     url: '/camera',
     views: {
       'menuContent': {
         templateUrl: 'templates/camera.html',
         controller: 'CameraController'
       }
     }
   })

  .state('app.bluetooth', {
    url: '/bluetooth',
    views: {
      'menuContent': {
        templateUrl: 'templates/bluetooth.html',
        controller: 'BluetoothController'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/start');
});
