angular.module('portalApp')
.controller('officehoursCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			title:'Course 1',
			tags: ['Coursename', 'Profname',],
			instructorName: "Insert name",
            subjectInstructors: ["Prof1","Prof2"],
            taNames:"Insert names"
                     
		},
		{
			title:'Course 2',
			tags: ['Coursename', 'Profname'],
            instructorName: "Insert name",
            subjectInstructors:["Prof1","Prof2"],
            taNames:["Name1", "Name 2"]
        },
		{
			title:'Course 3',
			tags: ['Coursename', 'Profname'],
			instructorName: "Insert name",
            subjectInstructors:["Prof1","Prof2"],
            taNames:["Name1", "Name 2"]
        },
		{
			title:'Course 4',
			tags: ['Coursename','Profname'],
			instructorName: "Insert name",
            subjectInstructors:["Prof1","Prof2"],
            taNames:["Name1", "Name2"]
		},
		{
			title:'Course 5',
			tags: ['Coursename', 'Profname'],
			instructorName: "Insert name",
            subjectInstructors:["Prof1","Prof2"],
            taNames:["Name1", "Name2"]
		},
		{
			title:'Course 6',
			tags: ['Coursename', 'Profname'],
			instructorName: "Insert name",
            subjectInstructors:["Prof1","Prof2"],
            taNames:["Name1", "Name2"]
		}
	];
    
    $scope.subitems = [
        {
         title:'Course X',
         tags: ['Coursename', 'Profname'],
         nameProf:"Displays name",
         daytime:"Days,Timings"
        }
        ];
    
	// Show main view in the first column as soon as controller loads
	$scope.portalHelpers.showView('officehoursMain.html', 1);
	
	// This function gets called when user clicks an item in the list
	$scope.showDetails = function(item){
		// Make the item that user clicked available to the template
		$scope.detailsItem = item;	
		$scope.portalHelpers.showView('officehoursDetails.html', 2);
    };
    $scope.showSubDetails= function(subitem){
        $scope.subdetailsItem = subitem;
        $scope.portalHelpers.showView('officehoursSubDetails.html', 3);
        };
}]);
