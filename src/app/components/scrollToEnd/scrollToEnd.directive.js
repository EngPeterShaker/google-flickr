(function () {
  "use strict";

  angular.module("angularGulp").directive("scrollToEnd", scrollToEnd);

  /** @ngInject */
  function scrollToEnd() {
    var directive = {
      restrict: "E",
      scope: {},
      controller: scrollToEndController,
      controllerAs: "vm",
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function scrollToEndController(moment, $scope, $rootScope, $window) {
      var vm = this;

      angular.element($window).bind("scroll", function() {
        var windowHeight = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight;
        var body = document.body,
          html = document.documentElement;
        var docHeight = Math.max(body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight);
        var windowBottom = windowHeight + window.pageYOffset;
        if (windowBottom >= docHeight) {
          alert("bottom rsssssssssssssssssssssssssssssssseached");
        }
      });
    }
  }
})();
