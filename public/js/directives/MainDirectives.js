/**
 * Created by John on 12/5/2016.
 */

var mainDirectives = angular.module('MainDirectives', []);

mainDirectives.directive('navBg', function($window, $animate) {
  return {
    restrict: 'A',
    link: function(scope, element) {
      angular.element($window).bind('scroll', function() {
        if (this.pageYOffset > 950) {
          element.addClass('show-nav-bg');
        } else {
          element.removeClass('show-nav-bg');
        }
      });
    }
  }
});

mainDirectives.directive('heroItem', ['$timeout', function($timeout) {
  return {
    restrict: 'AE',
    scope: {
      itemData: '='
    },
    template: '<div style="{{itemData.style}}" ng-show="!delay" class="hero-item">' +
                '<strong>{{itemData.name}}</strong>' +
              '</div>',
    link: function(scope) {
      scope.delay = scope.itemData.delay;
      $timeout(function() {
        scope.delay = false;
      }, scope.delay);
    }
  }
}]);
