;(function (){

  'use strict';

  angular.module('PopQuiz')

  .controller('TakeQuiz', ['$scope', '$http', 'PARSE', '$routeParams',

    function ($scope, $http, PARSE, $routeParams) {

      var id = $routeParams.id;

      // Answer Constructor
      var Score = function () {
        this.correct = 0;
        this.incorrect = 0;
        };

      // Answer Object
      $scope.s = new Score();


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
        _.each($scope.questions, function(x){
          if (x.answer == x.guess){
            $scope.s.correct ++;
          } else {
            $scope.s.incorrect ++;
          };
        });

        console.log($scope.s);

      };



    }
  ]);

}());
