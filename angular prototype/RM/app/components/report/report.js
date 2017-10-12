
(function () {

	var controller = function (ResourceService) {
		
				var ctrl = this;
				var chart = angular.copy(
					{
						data: [],
						titles: [{}],
						listeners: [{}],
						type: 'serial',
						theme: 'black',
						categoryField: 'Name',
						rotate: true,
						legend: {
							enabled: false
						},
						chartScrollbar: {
							enabled: false,
						},
						categoryAxis: {
							gridPosition: 'start',
							parseDates: false
						},
						valueAxes: [{
							position: "top",
						}],
						graphs: [{
							type: "column",
							title: "Open Campus test",
							valueField: "Count",
							fillAlphas: 1,
						}],
					});
				chart.titles[0].text = "Employee Count By Department";
				chart.data = ResourceService.loadInitialData();
				ctrl.data = chart;
			};

	angular.module('resourceManagementTool').component('report', {
		templateUrl: 'app/components/report/report.html',
		controller: controller
	});

})();

