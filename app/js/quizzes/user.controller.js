;(function (){

  'use strict';

  angular.module('PopQuiz')

  .controller('User', ['$scope', '$http', 'PARSE', '$location',

    function ($scope, $http, PARSE, $location) {

      // Vehicle Constructor
      var User = function (options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.email = options.email;
        this.userName = options.userName;
        this.password = options.password;
        this.passConfirm = options.passConfirm;
      };

      // Add Vehicle Method
      $scope.addUser = function (x) {
        var y = new User(x);

        $http.post(PARSE.URL + 'classes/User', y, PARSE.CONFIG)

        .success( function () {

         $scope.user = {};

        });


      };

    }
  ])

}());
