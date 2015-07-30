var app = angular.module('app', ['ngRoute', 'angularMoment']);
app.config(function ($routeProvider) {
  $routeProvider
    .when('/',{
        templateUrl: '/partials/home.html'
    })
    .when('/dashboard', {
        templateUrl: '/partials/dashboard.html'
    })
    .when('/products', {
        templateUrl: '/partials/products.html'
    })
    .when('/orders', {
    	templateUrl: '/partials/orders.html'
    })
    .when('/customers',{
    	templateUrl: 'partials/customers.html'
    })
    .otherwise({
        redirectTo: '/'
    });
});