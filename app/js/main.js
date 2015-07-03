;(function (){

  'use strict';

  angular.module('PopQuiz', ['ngRoute'])

  .constant('PARSE', {
    URL: 'https://api.parse.com/1/',
    CONFIG: {
      headers: {
       'X-Parse-Application-Id' : 'Lqqdi4EsTRr9r9MVyoa0xMHhGwlINSFe5pKECqRR',
       'X-Parse-REST-API-Key'  : 'l6Wn1r7W9VobV2SxxxMeIEvcdAHutLdtgi6OWBcx'
      }
    }
  })

  .config( [ '$routeProvider',
  function ($routeProvider) {

    $routeProvider.when('/', {

      controller: 'Play',
      templateUrl: 'templates/play.tpl.html'

    })

    .when('/addquiz', {

      controller: 'Quiz',
      templateUrl: 'templates/add.tpl.html'

    })

    .when('/signup', {

      controller: 'User',
      templateUrl: 'templates/signup.tpl.html'

    })

    .when('/signin', {

      controller: 'User',
      templateUrl: 'templates/signin.tpl.html'

    })

    .when('/quiz/:id', {

      controller: 'TakeQuiz',
      templateUrl: 'templates/takequiz.tpl.html'

    });


    }
  ]);





}());
