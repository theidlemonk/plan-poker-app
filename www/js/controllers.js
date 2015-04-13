angular.module('plan-poker.controllers', ['ionic', 'plan-poker.services'])

.controller('DecksCtrl', function($scope, $location, $stateParams) {
    $scope.url_id = $stateParams.id;
    var chosenDeck = ""
    $scope.decks = [{
        id: 0,
        title: "Fibonacci",
        cards: ["1", "2", "3", "4"]
    }, {
        id: 1,
        title: "Tshirt Sizes",
        cards: ["S", "M", "L"]
    }]

})


.controller('AboutCtrl', function($scope) {

})
