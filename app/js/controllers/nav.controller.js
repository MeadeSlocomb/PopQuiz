;(function (){

  'use strict';

  angular.module('PopQuiz')

  .controller('NavCtrl', ['$scope', '$http', 'PARSE', '$location',

  function ($scope, $http, PARSE, $location) {

    // Sets username to variable for greeting
    $scope.userName = Cookies.get('username');


  }

  ]);

}());
