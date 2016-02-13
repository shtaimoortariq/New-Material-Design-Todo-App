/**
 * Created by Taimoor tariq on 1/21/2016.
 */


angular.module("todoCoreModule")
    .service("todoAppData", function ($firebaseArray) {
        console.log("In service");


        var _self         = this;
        var alltodo       = [];
        var completedTask = [];
        var i             = 0;

        var ref = new Firebase("https://addtodo.firebaseio.com/");


        //      dataBase work

            alltodo = $firebaseArray(ref);
            alltodo.$loaded()
                .then(function (data) {
                    console.log("data:" +data)
                })
                .catch(function (error) {
                    console.log("Error" +error);
                });

        //===================
        //      setters
        //===================

        this.addTodo = function (todo) {

            ref.push({
                todo: todo,
                complete: false,
                remaining: true

            })

        };

        this.addCompletedTask = function() {
            completedTask.push({
                completedTask : i
            });
        };

        this.setDeleteTask = function (index) {
            alltodo.splice(index, 1);
        };

        //===================
        //      getters
        //===================

        this.getTodoList      = function() {
            return alltodo;
        };

        this.getCompletedTask = function () {
           return completedTask;
        };



    });
