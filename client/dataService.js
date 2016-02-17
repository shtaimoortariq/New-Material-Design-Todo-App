/**
 * Created by Taimoor tariq on 1/21/2016.
 */


angular.module("todoCoreModule")
    .service("todoAppData", function ($firebaseArray) {

        var _self = this;
        var alltodo = [];
        var completedTask = [];
        var i = 0;

        var ref = new Firebase("https://addtodo.firebaseio.com/userName/todo");
        var completedTodoRef = new Firebase("https://addtodo.firebaseio.com/userName/completedTodos");


        alltodo = $firebaseArray(ref);
        completedTask = $firebaseArray(completedTodoRef);

        //=================================
        //      onservice load functions
        //=================================

        alltodo.$loaded()
            .then(function (data) {
                console.log("todoData:" + data);
            })
            .catch(function (error) {
                console.log("toDoError" + error);
            });

        completedTask.$loaded()
            .then(function (data) {
                console.log("completedTaskData:" + data);
            })
            .catch(function (error) {
                console.log("completedError" + error);
            });

        //===================
        //      addTodo
        //===================

        this.addTodo = function (todo) {

            ref.push({
                todo: todo,
                complete: false,
                remaining: true

            })

        };

        this.addCompletedTask = function (index) {
            //update todo if completed
            ref.child(alltodo[index].$id).update({complete: true, remaining: false});

            //if task is completed then shift the node for this task  (from todo to completed)
            completedTodoRef.child(alltodo[index].$id).set({
                todo: alltodo[index].todo,
                complete: alltodo[index].complete,
                remaining: alltodo[index].remaining
            });

            //remove todo from ref
            ref.child(alltodo[index].$id).remove();

        };

        //==============================
        //      delete functionality
        //==============================

        this.setDeleteTaskFromRefNode = function (index) {
            ref.child(alltodo[index].$id).remove();

        };

        this.setDeleteTaskFromCompletedTaskNode = function (index) {
            completedTodoRef.child(completedTask[index].$id).remove();

        };

        //===================
        //      getters
        //===================

        this.getTodoList = function () {
            return alltodo;
        };

        this.getCompletedTask = function () {
            return completedTask;
        };


    });
