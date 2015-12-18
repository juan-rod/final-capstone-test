var app = angular.module("lGame", ['ngRoute','ui.bootstrap']);






app.config(['$routeProvider',
  function($routeProvider){
    $routeProvider
      .when('/lyricGame',{
        templateUrl : "data/partials/lyricGame.html",
        controller : "lyricCtrl"
      })
      .when('/pickSong',{
        templateUrl : "data/partials/pickSong.html",
        controller : "lyricCtrl"
       })
      .when('/gameView',{
        templateUrl : "data/partials/gameView.html",
        controller : "lyricCtrl"
       })
      //  .when('/howBout',{
      //   templateUrl : "partials/howBout.html",
      //   controller : "howBoutCtrl"
      // })
      //   .when('/main',{
      //   templateUrl : "partials/main.html",
      //   controller : "mainCtrl"
      // })
      //   .when('/win',{
      //   templateUrl : "partials/win.html",
      //   controller : "winCtrl"
      // })
      .otherwise({
        redirectTo: '/lyricGame'
      });
   
  }
  ]);