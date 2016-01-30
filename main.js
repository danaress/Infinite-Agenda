var myApp = angular.module('myApp', ['infinite-scroll']);

myApp.controller('numbersController', ['$scope', function($scope){

           // Hiding/Showing elements

            // $scope.balls = {

            //     hideNotes : true,
            //     noteButton : true,
            //     saveButton : false,
            //     newnotehide : false,
            //     notes : ''
            // }

           // Switching hide/show when "Add Notes" is clicked


// add or edit mode
// view mode
// New note

//ng-hide='view-mode'   -> save, textarea
// ng-show='view-mode'  -> add notes
           $scope.addNote = function(box){
               box.hideNotes = false;
               box.noteButton = false;
               box.saveButton = true;
               console.log(box)
           }

           // Saving Notes ng-click

           $scope.submitNote = function(box) {
               box.saveButton = false;
               box.noteButton = true;
               box.hideNotes = true;
              box.notes.push(box.newNote);

           }

           // Trying to save notes into an object

           var notenum = '';
           // $scope.submitNote = function(box){
           // }

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
               hideNotes : true,
               noteButton : true,
               saveButton : false
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