/**
 * Created by Taimoor tariq on 1/21/2016.
 */


angular.module("todoCoreModule")
    .service("todoAppData", function () {

        var _self         = this;
        var alltodo       = [];
        var remainingTask = 0;
        var i             = 0;

        this.addTodo = function (todo) {
            alltodo.push({
                todo: todo,
                complete: false,
                remaining: true

            });

            remainingTask++;
            console.log(alltodo);
        };

        this.getTodoList      = function() {
            return alltodo;
        };

        this.getRemainingTask = function () {

           return remainingTask;
        }
    });
