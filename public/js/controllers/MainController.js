/**
 * Created by John on 12/4/2016.
 */
// public/js/controllers/MainCtrl.js
angular.module('MainController', []).controller('MainController', function($scope) {
    var vm = this;

    vm.isNavCollapsed = true;

    vm.leftVisible = false;
    vm.rightVisible = false;

    vm.close = function() {
        vm.leftVisible = false;
        vm.rightVisible = false;
    };

    vm.show = function(e) {
        vm.rightVisible = true;
        e.stopPropagation();
    };

    vm.helloWorld = function() {
        console.log('GO!');
    };
});