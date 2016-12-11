/**
 * Created by John on 12/4/2016.
 */
// public/js/controllers/MainCtrl.js
angular.module('MainController', []).controller('MainController', function($scope) {
    var vm = this;

    vm.isNavCollapsed = true;

    vm.heroContent = [
        {
            name: 'Software',
            delay: '500',
            style: 'margin-right: 175px'
        },
        {
            name: 'Engineering',
            delay: '1000',
            style: 'margin-right: 50px'
        },
        {
            name: 'Development',
            delay: '1500',
            style: 'margin-left: 50px'
        },
        {
            name: '& Design',
            delay: '2000',
            style: 'margin-left: 75px'
        }
    ]

});