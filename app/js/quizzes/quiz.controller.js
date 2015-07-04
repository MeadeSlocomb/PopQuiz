;(function (){

  'use strict';

  angular.module('PopQuiz')

  .controller('Quiz', ['$scope', '$http', 'PARSE', '$location',

    function ($scope, $http, PARSE, $location) {


      // Quiz Constructor
      var Quiz = function () {
        this.title = '';
        this.desc = '';
        this.color = '';
        this.creator = '';
        this.type = '';
        this.quiz = [{
          question: '',
          answer: '',
          guess: '',
          number: 1
        }];
      };

      // Quiz Object
      $scope.q = new Quiz();

      // Add Quiz Method
      $scope.addQuiz = function () {

        $scope.q.creator = Cookies.get('username');

        switch ($scope.q.type) {
        case "images/geography.png":
          $scope.q.color = 'blue';
          break;
        case "images/math.png":
          $scope.q.color = 'red';
          break;
        case "images/science.png":
          $scope.q.color = 'green';
          break;
        case "images/history.png":
          $scope.q.color = 'yellow';
          break;
        case "images/entertainment.png":
          $scope.q.color = 'pink';
          break;
        case "images/music.png":
          $scope.q.color = 'purple';
          break;
        case "images/wildcard.png":
          $scope.q.color = 'orange';
          break;
        }

        $http.post(PARSE.URL + 'classes/Quiz', $scope.q, PARSE.CONFIG)

        .success( function () {

          // $scope.q = new Quiz();

          console.log($scope.q);


            $location.path('/');

        });
      };

      //Append Question to New Quiz Form
      $scope.addQuestion = function(){
        var quest = {
        question: '',
        answer: '',
        number: $scope.q.quiz.length + 1
      };
        $scope.q.quiz.push(quest);
      };

    }
  ])

}());
