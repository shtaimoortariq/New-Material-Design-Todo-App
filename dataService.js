/**
 * Created by Taimoor tariq on 1/21/2016.
 */


angular.module("todoCoreModule")
    .service("todoAppData", function () {
        this.alltodo = [];
        this.alltodoLength1 = 0;

        this.addTodo = function (todo) {

            this.alltodo.push({
                todo: todo,
                complete: false,
                remaining: true

            });
            this.alltodoLength1;

            console.log(this.alltodo);

        }
    });