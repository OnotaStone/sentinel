(function () {

	var controller = function ($scope, ResourceService) {

		var ctrl = this;

		ctrl.$onInit = function () {

			ctrl.genderOptions = this.data.Gender;
			ctrl.titleOptions = this.data.Title;
			ctrl.departments = this.data.Department;
			ctrl.products = this.data.Product;
			ctrl.classifications = this.data.Classification;
		};

		ctrl.submit = function (form) {
			if (form.$invalid) {
				return;
			}

			ResourceService.saveModel(ctrl.data);
		};
	};

	angular.module('resourceManagementTool').component('employee', {

		bindings: {
			data: '<',
			formReference: '<'
		},
		templateUrl: 'app/components/employee/employee.html',
		controller: controller
	});

})();


