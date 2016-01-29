var myApp = angular.module('myApp', ['infinite-scroll']);

myApp.controller('numbersController', ['$scope', function($scope){

		    var today = new Date();

    		$scope.counter = 0;
    		$scope.numbers = [];
    $scope.loadMore = function() {
   			
        for (var i = 0; i < 1; i++) {
        	var box = {
    		counter : $scope.counter,
            today : $scope.today
    		};
        
            $scope.today = ($scope.today).setDate($scope.today.getDate() +1);
        	$scope.counter = $scope.counter + 1;
            $scope.numbers.push(box);
          
        };
    }
    
}])