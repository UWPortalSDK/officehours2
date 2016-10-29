angular.module('portalApp')
.controller('officehoursCtrl', ['$scope', function ($scope) {
	
	// mock data
	$scope.items = [
		{
			title:'Course 1',
			tags: ['Coursename', 'Profname',],
			instructorName:         {
           								title:'Course 1', 
         								tags: ['Coursename', 'Profname'],
         								nameProf:"Displays name1",
         								daytime:"Days,Timings"
         							},
            subjectInstructors: [        
        					  {
         						title:'Course 1A', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name1A",
         						daytime:"Days,Timings"
        						},
        					{
         						title:'Course 1B', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name1B",
         						daytime:"Days,Timings"
        					}
            			],
            taNames:[
                    {
         			 title:'Course 1a', 
         			 tags: ['Coursename', 'Profname'],
         			 nameProf:"Displays name1a",
         			 daytime:"Days,Timings"
        			},
                	{
         			title:'Course 1b', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name1b",
         			daytime:"Days,Timings"
        			}
            	   ]
            
        } ,
            
		{
			title:'Course 2',
			tags: ['Coursename', 'Profname'],
            instructorName:         {
         								title:'Course 2', 
         								tags: ['Coursename', 'Profname'],
         								nameProf:"Displays name2",
         								daytime:"Days,Timings"
        							},
            subjectInstructors:[
        						        {
         									title:'Course 2A', 
         									tags: ['Coursename', 'Profname'],
         									nameProf:"Displays name2A",
         									daytime:"Days,Timings"
        								},
                                       {
         								title:'Course 2B', 
         								tags: ['Coursename', 'Profname'],
         								nameProf:"Displays name2B",
         								daytime:"Days,Timings"
        								}
                               ],
            taNames:[
                    {
         			title:'Course 2a', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name2a",
         			daytime:"Days,Timings"
        			},
                    {
         			title:'Course 2b', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name2b",
		            daytime:"Days,Timings"
        			}
         		   ]
        		},
        
		{
			title:'Course 3',
			tags: ['Coursename', 'Profname'],
			instructorName:
                    {
         			title:'Course 3', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name3",
         			daytime:"Days,Timings"
        			},
            subjectInstructors:[
                        		{
         						title:'Course 3A', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name3A",
         						daytime:"Days,Timings"
        						},
         		               {
         						title:'Course 3B', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name3B",
         						daytime:"Days,Timings"
        						}
            					],
            taNames:[
                        {
         				title:'Course 3a', 
         				tags: ['Coursename', 'Profname'],
         				nameProf:"Displays name3a",
         				daytime:"Days,Timings"
        				}, 
                        {
         				title:'Course 3b', 
         				tags: ['Coursename', 'Profname'],
         				nameProf:"Displays name3b",
         				daytime:"Days,Timings"
        				}
            		]
        },
        
		{
			title:'Course 4',
			tags: ['Coursename','Profname'],
			instructorName:
            			{
         				title:'Course 4', 
         				tags: ['Coursename', 'Profname'],
         				nameProf:"Displays name4",
         				daytime:"Days,Timings"
        				},
            subjectInstructors:[
                				{
         						title:'Course 4A', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name4A",
         						daytime:"Days,Timings"
        						},
           				        {
         						title:'Course 4B', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name4B",
         						daytime:"Days,Timings"
        						}
            				],
            taNames:[
                        {
         				title:'Course 4a', 
         				tags: ['Coursename', 'Profname'],
         				nameProf:"Displays name4a",
         				daytime:"Days,Timings"
        				}, 
                        {
         				title:'Course 4b', 
         				tags: ['Coursename', 'Profname'],
         				nameProf:"Displays name4b",
         				daytime:"Days,Timings"
        				}
            		]
		},
        
		{
			title:'Course 5',
			tags: ['Coursename', 'Profname'],
			instructorName:
            			{
         				title:'Course 5', 
         				tags: ['Coursename', 'Profname'],
         				nameProf:"Displays name5",
         				daytime:"Days,Timings"
        				},
            subjectInstructors:[        
            {
            title:'Course 5A', 
            tags: ['Coursename', 'Profname'],
            nameProf:"Displays name5A",
            daytime:"Days,Timings"
            },
           {
            title:'Course 5B', 
            tags: ['Coursename', 'Profname'],
            nameProf:"Displays name5B",
            daytime:"Days,Timings"
            }
            ],
            taNames:[
          	        {
   				    title:'Course 5a', 
         		    tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name5a",
         			daytime:"Days,Timings"
        			}, 
                    {
         			title:'Course 5b', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name5b",
         			daytime:"Days,Timings"
        			}
            		]
		},
        
		{
			title:'Course 6',
			tags: ['Coursename', 'Profname'],
			instructorName: 
         			        {
      					   title:'Course 6', 
         				   tags: ['Coursename', 'Profname'],
         				   nameProf:"Displays name6",
         			       daytime:"Days,Timings"
        					},
            subjectInstructors:[        
                {
          		title:'Course 6A', 
         		tags: ['Coursename', 'Profname'],
         		nameProf:"Displays name6A",
         		daytime:"Days,Timings"
        		},
                {
         		title:'Course 6B', 
         		tags: ['Coursename', 'Profname'],
         		nameProf:"Displays name6B",
         		daytime:"Days,Timings"
        		}
            ],
            taNames:[
                     {
         			title:'Course 6a', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name6a",
         			daytime:"Days,Timings"
        			}, 
                   {
         			title:'Course 6b', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name6b",
         			daytime:"Days,Timings"
        			}
            ]
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
    $scope.showSIDetails= function(subitem){
        $scope.subdetailsItem = subitem;
        $scope.portalHelpers.showView('officehoursSubitemsSI.html', 3);
        };
    $scope.showTADetails= function(subitem){
        $scope.subdetailsItem = subitem;
        $scope.portalHelpers.showView('officehoursSubitemsTA.html', 3);
        };
    $scope.showIDetails= function(subitem){
        $scope.subdetailsItem = subitem;
        $scope.portalHelpers.showView('officehoursSubitemsI.html', 3);
        };
}]);
