var myApp = angular.module('myApp', ['infinite-scroll']);

myApp.controller('numbersController', ['$scope', function($scope){

            // Hiding/Showing elements

            $scope.hideNotes = true;
            $scope.noteButton = true;
            $scope.saveButton = false;
            $scope.notes = '';

            // Switching hide/show when "Add Notes" is clicked

            $scope.addNote = function(){
                $scope.hideNotes = false;
                $scope.noteButton = false;
                $scope.saveButton = true;
            }

            // Saving Notes ng-click

            $scope.submitNote = function() {
                $scope.saveButton = false;
                $scope.noteButton = true;
                $scope.hideNotes = true;
            }

            // Trying to save notes into an object

            var notenum = '';
            $scope.submitNote = function(){
                $scope.box.notes.push($index);
            }

            // Setting Date and counter

		    $scope.today = new Date('2016', '00', '28');
    		$scope.counter = 0;
    		$scope.numbers = [];

            // Infinite scroll function addnig boxes

    $scope.loadMore = function() {
   			
            $scope.today = angular.copy($scope.today);

        for (var i = 0; i < 1; i++) {
        	var box = {
    		counter : $scope.counter,
            today : $scope.today,
            notes : notenum
    		};

            // Console.logs and counter / Date increment

            console.log(box);
            console.log($scope.today.getDate);  
            $scope.today.setDate($scope.today.getDate() +1);
        	$scope.counter = $scope.counter + 1;
            $scope.numbers.push(box);
          
        };
    }
    
}])