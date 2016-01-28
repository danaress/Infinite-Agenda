var myApp = angular.module('myApp', ['infinite-scroll']);

myApp.controller('numbersController', ['$scope', function($scope){

    		$scope.counter = 0;
    		$scope.numbers = [];
    $scope.loadMore = function() {
   			
    
        for (var i = 0; i < 5; i++) {
        	var date = {
    		counter : $scope.counter
    		};
        
        	$scope.counter = $scope.counter + 1;
            $scope.numbers.push(date);
          
        };
    }
    
}])