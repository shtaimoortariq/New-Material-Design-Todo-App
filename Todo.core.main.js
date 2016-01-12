/**
 * Created by Taimoor tariq on 1/6/2016.
 */


var app = angular.module("todoCoreModule", ['ngMaterial', 'ngMdIcons']);

app.controller("todoCoreController", function ($timeout, $mdSidenav, $log) {


    this.toggleLeft = buildDelayedToggler('left');
    this.isOpenLeft = function () {
        return $mdSidenav('left').isOpen();
    };

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



});


app.controller('LeftCtrl', function ($timeout, $mdSidenav, $log) {
    this.close = function () {
        $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });
    };
});

