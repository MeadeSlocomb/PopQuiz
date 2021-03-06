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
      var UserLogin = function (options) {
        this.username = options.username;
        this.password = options.password;
      };

      // Sets username to variable for greeting
      $scope.userName = Cookies.get('username');


      // Add User Method
      $scope.addUser = function (x) {
        var y = new User(x);

        $http.post(PARSE.URL + 'classes/_User', y, PARSE.CONFIG)

        .success( function (data) {

          Cookies.set('sessionToken', data.sessionToken);
          Cookies.set('username', data.username);
          $scope.user = {};

        });
      };


      // Login Method
      $scope.signin = function (x) {
        var y = new UserLogin(x);
        var u = encodeURIComponent('username=' + y.username);
        var p = encodeURIComponent('password=' + y.password);

        $http({
          method: 'GET',
          url: PARSE.URL + 'login',
          headers: PARSE.CONFIG.headers,
          params: y
        })

        .success( function (data) {

          $scope.session = {};
          Cookies.set('sessionToken', data.sessionToken);
          Cookies.set('username', data.username)

          $location.path('/');


        });
      };



    }
  ])

}());
