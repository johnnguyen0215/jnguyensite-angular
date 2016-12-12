/**
 * Created by John on 12/5/2016.
 */

var mainDirectives = angular.module('MainDirectives', []);

mainDirectives.directive('heroItem', ['$timeout', function($timeout) {
  return {
    restrict: 'AE',
    scope: {
      itemData: '='
    },
    template: '<div style="{{itemData.style}}" ng-show="!itemData.delay" class="hero-item">' +
                '<strong>{{itemData.name}}</strong>' +
              '</div>',
    link: function(scope) {
      $timeout(function() {
        scope.itemData.delay = false;
      }, scope.itemData.delay);
    }
  }
}]);
