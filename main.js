var myApp = angular.module('myApp', ['infinite-scroll']);

var numbersController = function($scope){
    $scope.numbers = [];
    $scope.counter = 0;

    $scope.loadMore = function () {
        for (var i = 0; i < 10; i++) {
            $scope.numbers.push(++$scope.counter);
        };
        console.log($scope.numbers);
    }
    $scope.loadMore();
}
myApp.controller('numbersController', numbersController); 