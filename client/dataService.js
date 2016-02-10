/**
 * Created by Taimoor tariq on 1/21/2016.
 */


angular.module("todoCoreModule")
    .service("todoAppData", function () {

        var _self         = this;
        var alltodo       = [];
        var completedTask = [];
        var i             = 0;

        this.addTodo = function (todo) {
            alltodo.push({
                todo: todo,
                complete: false,
                remaining: true

            });
        };

        this.addCompletedTask = function() {
            completedTask.push({
                completedTask : i
            });

        };

        this.getTodoList      = function() {
            return alltodo;
        };

        this.getCompletedTask = function () {
           return completedTask;
        };

        this.setDeleteTask = function (index) {
            alltodo.splice(index, 1);

        };


    });
