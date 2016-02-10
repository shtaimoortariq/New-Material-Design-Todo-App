/**
 * Created by Taimoor tariq on 1/21/2016.
 */


angular.module("todoCoreModule")
.controller("DialogController" , function ($scope, todoAppData, $mdDialog) {
    $scope.todo = "";

    $scope.addTodo = function () {

        //calling service functions
        todoAppData.addTodo($scope.todo);
       // todoAppData.addRemainingTask();

        $scope.todo = "";
        $mdDialog.hide();
    }

});