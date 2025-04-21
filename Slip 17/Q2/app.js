var app = angular.module("studentApp", []);

app.controller("StudentController", function($scope) {
    $scope.students = [
        { rollNo: 101, name: "Amit Sharma", age: 22, course: "M.Sc (CS)", city: "Mumbai" },
        { rollNo: 102, name: "Priya Verma", age: 21, course: "M.Sc (CS)", city: "Delhi" },
        { rollNo: 103, name: "Raj Patel", age: 23, course: "M.Sc (CS)", city: "Ahmedabad" },
        { rollNo: 104, name: "Neha Singh", age: 24, course: "M.Sc (CS)", city: "Pune" },
        { rollNo: 105, name: "Vikram Yadav", age: 22, course: "M.Sc (CS)", city: "Bangalore" },
        { rollNo: 106, name: "Sanya Mehta", age: 21, course: "M.Sc (CS)", city: "Chennai" },
        { rollNo: 107, name: "Rohan Das", age: 23, course: "M.Sc (CS)", city: "Kolkata" },
        { rollNo: 108, name: "Anjali Kapoor", age: 24, course: "M.Sc (CS)", city: "Hyderabad" },
        { rollNo: 109, name: "Kunal Joshi", age: 22, course: "M.Sc (CS)", city: "Jaipur" },
        { rollNo: 110, name: "Meera Iyer", age: 21, course: "M.Sc (CS)", city: "Indore" }
    ];
});
