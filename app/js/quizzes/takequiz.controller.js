;(function (){

  'use strict';

  angular.module('PopQuiz')

  .controller('TakeQuiz', ['$scope', '$http', 'PARSE', '$routeParams', '$location',

    function ($scope, $http, PARSE, $routeParams, $location) {

      var id = $routeParams.id;

      //Score variables

      $scope.correct = 0;
      $scope.incorrect = 0;

      //Variable to ensure answers can only be submitted once
      $scope.testTaken = false;


      // Pulls quiz from database to display
      $http.get(PARSE.URL + 'classes/Quiz/' + id, PARSE.CONFIG)

      .success( function (data) {

        $scope.quiz = data;
        $scope.questions = $scope.quiz.quiz;

      });

      // Submitted Quiz Constructor
      var submitQuiz = function () {
        this.answerArray = [{
          answer: ''
        }];
      };

      // Submitted Quiz Object
      var sq = new submitQuiz();

      // Checks to see if answers are correct

      $scope.checkAnswers = function() {
        if ($scope.testTaken == false) {
          $scope.testTaken = true;
          _.each($scope.questions, function(x){
            if (x.answer == x.guess){
              $scope.correct ++;
            } else {
              $scope.incorrect ++;
            };
          });
          $scope.accuracy = ($scope.correct / ($scope.correct + $scope.incorrect)) * 100;
          };
      };

      $scope.routeToMain = function(){
        console.log('clicked');
        $location.path('/');
      };

    }
  ]);

}());
