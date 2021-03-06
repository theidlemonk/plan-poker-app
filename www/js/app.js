// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('plan-poker', ['ionic', 'plan-poker.controllers'])

.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

.config(function($stateProvider, $urlRouterProvider) {
    $stateProvider

    .state('decks', {
        url: '/decks',
        templateUrl: 'templates/decks.html',
        controller: 'DecksCtrl'
    })

    .state('about', {
        url: '/about',
        templateUrl: 'templates/about.html',
        controller: 'AboutCtrl'
    })

    .state('deckDetails', {
        url: '/decks/:id',
        templateUrl: 'templates/deckDetails.html',
        controller: 'DecksCtrl'
    })

    .state('card', {
        url: '/card/:id',
        templateUrl: 'templates/card.html',
        controller: 'DecksCtrl'
    })


    $urlRouterProvider.otherwise('/decks');

})
