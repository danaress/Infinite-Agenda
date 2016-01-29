var myApp = angular.module('myApp', ['infinite-scroll']);

myApp.controller('numbersController', ['$scope', function($scope){

            $scope.hideNotes = true;
            $scope.noteButton = true;
            $scope.saveButton = false;
            $scope.notes = '';

            $scope.addNote = function(){
                $scope.hideNotes = false;
                $scope.noteButton = false;
                $scope.saveButton = true;
            }

            $scope.submitNote = function() {
                $scope.saveButton = false;
                $scope.noteButton = true;
                $scope.hideNotes = true;
            }
            var notenum = '';
            $scope.submitNote = function(){
                $scope.box.notes.push($index);
            }

		    $scope.today = new Date('2016', '00', '28');
    		$scope.counter = 0;
    		$scope.numbers = [];
    $scope.loadMore = function() {
   			
            $scope.today = angular.copy($scope.today);

        for (var i = 0; i < 1; i++) {
        	var box = {
    		counter : $scope.counter,
            today : $scope.today,
            notes : notenum
    		};

            console.log(box);
            console.log($scope.today.getDate);
            $scope.today.setDate($scope.today.getDate() +1);
        	$scope.counter = $scope.counter + 1;
            $scope.numbers.push(box);
          
        };
    }
    
}])