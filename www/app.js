// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('redAtomo', ['ionic', 'starter.controllers','login', 'logged'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('login',{
    url: "/login", 
    templateUrl: "modules/login/login.html",
    controller: 'loginCtrl'
  })
  
  .state('logged', {
    url: "/logged/:classId",
    abstract: true,
    templateUrl: "modules/logged/logged.html",
    controller: 'loggedCtrl',
    resolve: {
                classId : ['$stateParams', function($stateParams){
                    return $stateParams.classId;
                }]
    }
  })

  .state('logged.recent', {
    url: "/recent",
    views: {
      'tab-recent': {
        templateUrl: "modules/recent/recent.html",
        controller: "recentCtrl"
      }
    }
  })

  .state('logged.news', {
    url: "/news",
    views: {
      'tab-news': {
        templateUrl: "templates/browse.html"
      }
    }
  })

  .state('logged.multimedia', {
    url: "/multimedia",
    views: {
      'tab-multimedia': {
        templateUrl: "templates/playlists.html",
        controller: 'PlaylistsCtrl'
      }
    }
  })

    .state('logged.single', {
      url: "/playlists/:playlistId",
      views: {
        'tab-playlists': {
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
        }
      }
    });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
