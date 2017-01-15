/**
 * Created by John on 12/5/2016.
 */

var mainDirectives = angular.module('MainDirectives', []);

mainDirectives.directive('navBg', ['$timeout', '$window', function($timeout, $window) {
  return {
    scope: {
      isCollapsed: '=navBg'
    },
    restrict: 'A',
    link: function(scope, element) {
      $timeout(function() {
        var collapsedNav = angular.element(document.getElementsByClassName('navbar-collapse'));
        var aboutPage = document.querySelector('#aboutPage');
        scope.$watch('isCollapsed', function(newValue, oldValue) {
          if (!newValue && (aboutPage.getBoundingClientRect().top <= 0)){
            collapsedNav.css('background-color', '#34495e');
          }
        }, true);

        angular.element($window).bind('scroll', function() {
          var aboutPageOffset = aboutPage.getBoundingClientRect().top;
          if (aboutPageOffset <= 0) {
            element.addClass('show-nav-bg');
            if (!scope.isCollapsed) {
              collapsedNav.css('background-color', '#34495e');
            }
          } else {
            element.removeClass('show-nav-bg');
            collapsedNav.css('background-color', 'transparent');
          }
        });
      }, 0);
    }
  }
}]);

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
