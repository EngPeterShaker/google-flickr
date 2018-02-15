(function () {
  'use strict';

  angular
    .module('angularGulp')
    .directive('acmeNavbar', acmeNavbar);

  /** @ngInject */
  function acmeNavbar() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/navbar/navbar.html',
      scope: {
        creationDate: '='
      },
      controller: NavbarController,
      controllerAs: 'vm',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function NavbarController(moment, $scope, $rootScope) {
      var vm = this;
      document.getElementById("focusmeplease").focus();

      // "vm.creationDate" is available by directive option "bindToController: true"
      // vm.relativeDate = moment(vm.creationDate).fromNow();
      vm.myFunc = function () {
        console.log(vm.searchText);
        vm.searchText = $scope.$parent.main.searchText;
        console.log($scope);
        $rootScope.$emit("searchFnEmit", vm.searchText);
      }





    }
  }

})();
