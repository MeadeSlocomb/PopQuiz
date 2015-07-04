;(function (){

  'use strict';

  angular.module('PopQuiz')

  .controller('NavCtrl', ['$scope', '$http', 'PARSE', '$location', '$sce',

  function ($scope, $http, PARSE, $location, $sce) {

    // Sets username to variable for greeting
    $scope.welcome = function(){
      if (Cookies.get('username') !== undefined){
        return $sce.trustAsHtml('<span>' + Cookies.get("username") + '</span>');
      } else {
        return $sce.trustAsHtml('<i class="fa fa-arrow-left"></i><span>Sign in to play!</span>');
      }

    };

    $scope.signoutTpl = function(){
      if (Cookies.get('username') !== undefined){
        return $sce.trustAsHtml('<span>Sign</span><span>Out</span>');
      }
    };

    //Signout Method
    $scope.signout = function(){
      Cookies.expire('sessionToken');
      Cookies.expire('username');

    };

  }

  ]);

}());
