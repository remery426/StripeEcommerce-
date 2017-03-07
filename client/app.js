var app = angular.module('app',['ngRoute']);
app.config(function($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl: 'partials/Product.html'
    })
    .when('/login_page',{
      templateUrl: 'partials/login_page.html'
    })
    .when('/register',{
      templateUrl: 'partials/register.html'
    })
    .when('/confirmation',{
      templateUrl: 'partials/confirmation.html'
    })
    .otherwise({
        templateUrl: 'partials/Product.html'
    })
})
