;(function (){

  'use strict';

  angular.module('PopQuiz')

  .controller('Quiz', ['$scope', '$http', 'PARSE', '$location',

    function ($scope, $http, PARSE, $location) {


      // Quiz Constructor
      var Quiz = function () {
        this.title = '';
        this.desc = '';
        this.type = '';
        this.quiz = [{
          question: '',
          answer: '',
          number: 1
        }];
      };

      // Quiz Object
      $scope.q = new Quiz();

      // Add Quiz Method
      $scope.addQuiz = function (x) {

        $http.post(PARSE.URL + 'classes/Quiz', $scope.q, PARSE.CONFIG)

        .success( function () {

          $scope.q = new Quiz();

        });
      };

      $scope.addQuestion = function(){
        var quest = {
        question: '',
        answer: '',
        number: $scope.q.quiz.length + 1
      };
        console.log(quest);
        $scope.q.quiz.push(quest);
      };

    }
  ])

}());
