var myApp = angular.module('myApp', ['infinite-scroll']);

myApp.controller('numbersController', ['$scope', function($scope){

		    $scope.today = new Date('2016', '00', '28');

    		$scope.counter = 0;
    		$scope.numbers = [];
    $scope.loadMore = function() {
   			
            $scope.today = angular.copy($scope.today);

        for (var i = 0; i < 1; i++) {
        	var box = {
    		counter : $scope.counter,
            today : $scope.today
    		};
            console.log($scope.today.getDate);
            $scope.today.setDate($scope.today.getDate() +1);
        	$scope.counter = $scope.counter + 1;
            $scope.numbers.push(box);
          
        };
    }
    
}])