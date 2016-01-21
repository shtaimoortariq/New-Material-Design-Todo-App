/**
 * Created by Taimoor tariq on 1/6/2016.
 */


var app = angular.module("todoCoreModule", ['ngMaterial', 'ngMdIcons'])
app.config(function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');
});
app.controller("todoCoreController", function ($timeout, $mdSidenav, $log, $mdDialog) {


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

   /* this.addTodo = function () {
        alert("yes");
    }
*/

    this.showAlert = function(ev) {

        // Appending dialog to document.body to cover sidenav in docs app
        // Modal dialogs should fully cover application
        // to prevent interaction outside of dialog
        $mdDialog.show(
            $mdDialog.alert()
                .parent(angular.element(document.querySelector('#popupContainer')))
                .clickOutsideToClose(true)
                .title('PLEASE ADD TODO')
                .textContent('You can specify some description text in here.')
                .ariaLabel('Alert Dialog Demo')
                .ok('Got it!')
                .targetEvent(ev)
        );
    };
});


app.controller('LeftCtrl', function ($timeout, $mdSidenav, $log) {
    this.close = function () {
        $mdSidenav('left').close()
            .then(function () {
                $log.debug("close LEFT is done");
            });
    };
});



