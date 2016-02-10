/**
 * Created by Taimoor tariq on 1/6/2016.
 */


var app = angular.module("todoCoreModule", ['ngMaterial', 'ngMdIcons', 'firebase']);

    //==================================
    //         custom color work
    //==================================


app.config(function ($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange')

});

app.controller("todoCoreController", function ($scope, $timeout, $mdSidenav, $log, $mdDialog, todoAppData) {


    //=================================
    //         sidebar work
    //=================================

    this.toggleLeft = buildDelayedToggler('left');


    function debounce(func, wait, context) {
        var timer;
        return function debounced() {
            var context = this,
                args = Array.prototype.slice.call(arguments);
            $timeout.cancel(timer);
            timer = $timeout(function () {
                timer = undefined;
                func.apply(context, args);
            }, wait || 10);
        };
    }

    function buildDelayedToggler(navID) {
        return debounce(function () {
            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }, 200);
    }


    this.close = function () {
        $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });
    };

    //=====================================
    //              Dialog work
    //=====================================


    this.showDialog = function (ev) {

        $mdDialog.show({
            templateUrl: 'dialog.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose: true

        })
    };



    //==========================================
    //     database Service interaction Work
    //==========================================

    this.todos         = todoAppData.getTodoList();
    this.completedTask = todoAppData.getCompletedTask();


    //====================================================
    //     dropdown functions with service interaction
    //====================================================

    this.todoIsCompleted = function () {
        todoAppData.addCompletedTask();
    };

    this.todoIsDeleted = function (index) {
        todoAppData.setDeleteTask(index);
    };


});


