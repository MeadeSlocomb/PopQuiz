;(function (){

  'use strict';

  angular.module('PopQuiz')

  .controller('User', ['$scope', '$http', 'PARSE', '$location',

    function ($scope, $http, PARSE, $location) {

      // User Constructor
      var User = function (options) {
        this.firstName = options.firstName;
        this.lastName = options.lastName;
        this.email = options.email;
        this.username = options.userName;
        this.password = options.password;
        this.passConfirm = options.passConfirm;
      };

      // Session Constructor
      var session = function (options) {
        this.username = options.userName;
        this.password = options.password;
      };



      // Add User Method
      $scope.addUser = function (x) {
        var y = new User(x);

        $http.post(PARSE.URL + 'classes/_User', y, PARSE.CONFIG)

        .success( function () {

         $scope.user = {};

        });


      };

      // Login Method
      $scope.login = function (x) {
        var y = new session(x);

        $http.post(PARSE.URL + 'classes/_User', y, PARSE.CONFIG)

        .success( function () {

          Cookies.set('access_token', data.access_token);
          Cookies.set('username', data.username);
          $scope.session = {};

        });


      };

    }
  ])

}());
