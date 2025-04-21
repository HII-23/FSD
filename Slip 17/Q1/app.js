var app = angular.module("mscApp", ["ngRoute"]);

// Configure Routes
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "home.html"
    })
    .when("/syllabus", {
        templateUrl: "syllabus.html",
        controller: "SyllabusController"
    })
    .otherwise({
        redirectTo: "/"
    });
});

// Controller for Syllabus Page
app.controller("SyllabusController", function($scope) {
    $scope.subjects = [
        { name: "Advanced Operating System", topics: ["Distributed Systems", "Concurrency Control", "Security"] },
        { name: "Machine Learning", topics: ["Supervised Learning", "Unsupervised Learning", "Neural Networks"] },
        { name: "Big Data Analytics", topics: ["Hadoop", "MapReduce", "Spark"] },
        { name: "Cloud Computing", topics: ["AWS", "Azure", "Cloud Security"] },
        { name: "Internet of Things (IoT)", topics: ["Embedded Systems", "IoT Protocols", "Security in IoT"] }
    ];
});
