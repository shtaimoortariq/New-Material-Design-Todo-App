/**
 * Created by Taimoor tariq on 1/21/2016.
 */


angular.module("todoCoreModule")
    .service("todoAppData", function () {

        var _self         = this;
        var alltodo       = [];
        var remainingTask = [];
        var i             = 0;

        this.addTodo = function (todo) {
            alltodo.push({
                todo: todo,
                complete: false,
                remaining: true

            });
            i++;
        };

        this.addRemainingTask = function() {
            remainingTask.push({
                remainingTodo : i
            });
            console.log(remainingTask);

        };

        this.getTodoList      = function() {
            return alltodo;
        };

        this.getRemainingTask = function () {
           return remainingTask;
        }
    });
