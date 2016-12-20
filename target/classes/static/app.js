var app = angular.module("app", ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider, $locationProvider) {
    //
    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");
    //
    // Now set up the states
    $stateProvider
        .state('default', {
            url: "/home",
            templateUrl: "firstPage.html"
        })
   
    .state('user', {
        url: "/user",
        templateUrl: "user.html"
    })
        
    .state('admin', {
        url: "/admin",
        templateUrl: "admin.html"
    })
    
     
});