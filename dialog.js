/**
 * Created by Taimoor tariq on 1/21/2016.
 */


angular.module("todoCoreModule")
.controller("DialogController" , function ($scope, todoAppData) {
    $scope.todo = "";

    $scope.addTodo = function () {
        todoAppData.addTodo($scope.todo);
        $scope.todo = "";
    }

});