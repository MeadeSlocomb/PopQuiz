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
      templateUrl: 'js/quizzes/play.tpl.html'

    })

    .when('/addquiz', {

      controller: 'Quiz',
      templateUrl: 'js/quizzes/add.tpl.html'

    })

    .when('/signup', {

      controller: 'User',
      templateUrl: 'js/quizzes/signup.tpl.html'

    })

    .when('/signin', {

      controller: 'User',
      templateUrl: 'js/quizzes/signin.tpl.html'

    })

    .when('/quiz/:id', {

      controller: 'TakeQuiz',
      templateUrl: 'js/quizzes/takequiz.tpl.html'

    });


    }
  ]);





}());
