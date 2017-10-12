(function() { 

	var service = function ($http){
		
		this.loadInitialData = function ( )
		{  
			return $http.get ('assets/data/df2.json' )
			.then ( function  ( response) 
			{
				return response.data;
			}
				).catch ( function (error) {
					console.log ("Intial Chart Retrieval Failed: " + error.data);
				});
			
		};
		
		this.loadEmployeeData = function ( ) 
		{  
			return $http.get ('assets/data/employeeInfoPreLoadOptions.json' )
			.then ( function  ( response) 
			{
				return response.data;
			}
				).catch ( function (error) {
					console.log ("Employee Data Retrieval Failed: " + error.data);
				});
			
		};
	
		this.saveModel = function (model ) 
		{  
			alert  ("Demo Completed");
			return true;

			//  DEMO ENDED
			
			// return $http.post ('server url goes here' , model )  
			// .then ( function  ( response) 
			// {
			// 	return response.data;
			// }
			// 	).catch ( function (error) {
			// 		console.log ("Employee Data Retrieval Failed: " + error.data);
			// 	});
			
		};
		
	};

angular.module('resourceManagementTool').service('ResourceService', ['$http', service]);

})();
