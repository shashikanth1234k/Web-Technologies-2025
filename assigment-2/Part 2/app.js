var app = angular.module('financeApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when('/dashboard', {
      templateUrl: 'dashboard.html',
      controller: 'DashboardController'
    })
    .when('/expenses', {
      templateUrl: 'expenses.html',
      controller: 'ExpensesController'
    })
    .when('/income', {
      templateUrl: 'income.html',
      controller: 'IncomeController'
    })
    .otherwise({
      redirectTo: '/dashboard'
    });
});
