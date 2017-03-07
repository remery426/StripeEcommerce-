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
    .when('/checkout',{
      templateUrl: 'partials/checkout.html'
    })
    .otherwise({
        templateUrl: 'partials/Product.html'
    })
})
