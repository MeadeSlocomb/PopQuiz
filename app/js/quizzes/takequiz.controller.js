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

        console.log($scope.quiz);

      });



    }
  ]);

}());
