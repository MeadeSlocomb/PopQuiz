;(function (){

  'use strict';

  angular.module('PopQuiz')

  .controller('TakeQuiz', ['$scope', '$http', 'PARSE', '$routeParams',

    function ($scope, $http, PARSE, $routeParams) {

      var id = $routeParams.id;


      // Pulls quiz from database to display
      $http.get(PARSE.URL + 'classes/Quiz/' + id, PARSE.CONFIG)

      .success( function (data) {

        $scope.quiz = data;

      });

      // Submitted Quiz Constructor
      var submitQuiz = function () {
        this.answerArray = '';
        // this.answerArray = [{
        //   answer: ''
        // }];
      };

      // Submitted Quiz Object
      var sq = new submitQuiz();

      // Checks to see if answers are correct

      $scope.checkAnswers = function(x) {
        console.log(sq);

      }



    }
  ]);

}());
