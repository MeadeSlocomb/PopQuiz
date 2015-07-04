;(function (){

  'use strict';

  angular.module('PopQuiz')

  .controller('Play', ['$scope', '$http', 'PARSE',

    function ($scope, $http, PARSE) {



      $http.get(PARSE.URL + 'classes/Quiz', PARSE.CONFIG)

      .success( function (data) {

        $scope.QuizList = data.results;



      });

    }
  ]);

}());
