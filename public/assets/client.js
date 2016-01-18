/**
 * Created by ulaeulaeulae on 1/17/16.
 */
var app = angular.module('myApp', []);

app.controller('mainController', function($scope, $http){
    $scope.getNouns = function(){
        $http({
            method: 'GET',
            url: ('/nouns')}).then(function(response){
            $scope.nouns = response.data.Noun;
        })
    };

    $scope.getAdjectives = function(){
        $http({
            method: 'GET',
            url: ('/adjectives')}).then(function(response){
            $scope.adjectives = response.data.Adjectives;
        })
    };
    $scope.getNouns();
    $scope.getAdjectives();

    $scope.createUsername = function(){
        var noun = $scope.nouns;
        var adj = $scope.adjectives;

        $scope.username = [];

        shuffleArray(noun);
        shuffleArray(adj);

        for (var i = 0; i < 10; i++) {
            $scope.username[i] = $scope.adjectives[i] + $scope.nouns[i];
        }
        console.log($scope.username);

    };
});


var shuffleArray = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};
