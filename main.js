var myApp = angular.module('myApp', ['infinite-scroll']);

myApp.controller('numbersController', ['$scope', function($scope){

           // Hiding/Showing elements

//ng-hide='view-mode'   -> save, textarea
// ng-show='view-mode'  -> add notes

            $scope.addNote = function(box) {
             box.noteButton = false,
             box.hideNotes = true
            };

            $scope.submitNote = function(box) {
              box.noteButton = true;
              box.hideNotes = false;
              console.log(box.newNote);
              box.notes.push(box.newNote);
            };

           // Trying to save notes into an object

           var notenum = '';

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
               notes : [],
               hideNotes : false,
               noteButton : true, 
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