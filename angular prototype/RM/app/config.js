(function () {

  angular.module('resourceManagementTool').config(function ($stateProvider,$urlRouterProvider) {

    var report = {
      name: 'report',
      url: '/report',
      component: 'report'
    }
    var navigation = {
      name: 'navigation',
      component: 'navigation'
    }

    var employee = {
      name: 'employee',
      url: '/employee',

      component: 'employee',
      resolve: {
        data: function (ResourceService) {
          return ResourceService.loadEmployeeData();
        }
      }

    }

    $stateProvider.state(report);
    $stateProvider.state(navigation);
    $stateProvider.state(employee);

    $urlRouterProvider.otherwise('/report');

  });

})();



