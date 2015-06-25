;(function (){

  'use strict';

  angular.module('PopQuiz')

  .controller('Quiz', ['$scope', '$http', 'PARSE', '$location',

    function ($scope, $http, PARSE, $location) {

      // Vehicle Constructor
      var Quiz = function (options) {
        this.quizName = options.quizName;
        // this.quizCreator = options.quizCreator;
        // this.numberOfQuestions = options.numberOfQuestions;
        this.quiz = options.quiz;
      };

      // Add Vehicle Method
      $scope.addQuiz = function (x) {
        var y = new Quiz(x);

        $http.post(PARSE.URL + 'classes/Quiz', y, PARSE.CONFIG)

        .success( function () {

          $scope.quiz = {};

        });


      };

    }
  ])

}());
