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
                  						room:"Room 1",
         								daytime:"Days,Timings"
         							},
            subjectInstructors: [        
        					  {
         						title:'Course 1A', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name1A",
                                room:"Room 1A",
         						daytime:"Days,Timings"
        						},
        					{
         						title:'Course 1B', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name1B",
                                room:"Room 1B",
         						daytime:"Days,Timings"
        					}
            			],
            taNames:[
                    {
         			 title:'Course 1a', 
         			 tags: ['Coursename', 'Profname'],
         			 nameProf:"Displays name1a",
                     room:"Room 1a",
         			 daytime:"Days,Timings"
        			},
                	{
         			title:'Course 1b', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name1b",
                    room:"Room 1b",
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
                                        room:"Room 2",
         								daytime:"Days,Timings"
        							},
            subjectInstructors:[
        						        {
         									title:'Course 2A', 
         									tags: ['Coursename', 'Profname'],
         									nameProf:"Displays name2A",
                                            room:"Room 2A",
         									daytime:"Days,Timings"
        								},
                                       {
         								title:'Course 2B', 
         								tags: ['Coursename', 'Profname'],
         								nameProf:"Displays name2B",
                                        room:"Room 2B",
         								daytime:"Days,Timings"
        								}
                               ],
            taNames:[
                    {
         			title:'Course 2a', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name2a",
                    room:"Room 2a",
         			daytime:"Days,Timings"
        			},
                    {
         			title:'Course 2b', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name2b",
                    room:"Room 2b",
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
                    room:"Room 3",
         			daytime:"Days,Timings"
        			},
            subjectInstructors:[
                        		{
         						title:'Course 3A', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name3A",
                                room:"Room 3A",
         						daytime:"Days,Timings"
        						},
         		               {
         						title:'Course 3B', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name3B",
                                room:"Room 3B",
         						daytime:"Days,Timings"
        						}
            					],
            taNames:[
                        {
         				title:'Course 3a', 
         				tags: ['Coursename', 'Profname'],
         				nameProf:"Displays name3a",
                        room:"Room 3a",
         				daytime:"Days,Timings"
        				}, 
                        {
         				title:'Course 3b', 
         				tags: ['Coursename', 'Profname'],
         				nameProf:"Displays name3b",
                        room:"Room 3b",
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
                        room:"Room 4",
         				daytime:"Days,Timings"
        				},
            subjectInstructors:[
                				{
         						title:'Course 4A', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name4A",
                                room:"Room 4A",
         						daytime:"Days,Timings"
        						},
           				        {
         						title:'Course 4B', 
         						tags: ['Coursename', 'Profname'],
         						nameProf:"Displays name4B",
                                room:"Room 4B"
         						daytime:"Days,Timings"
        						}
            				],
            taNames:[
                        {
         				title:'Course 4a', 
         				tags: ['Coursename', 'Profname'],
         				nameProf:"Displays name4a",
                        room:"Room 4a",
         				daytime:"Days,Timings"
        				}, 
                        {
         				title:'Course 4b', 
         				tags: ['Coursename', 'Profname'],
         				nameProf:"Displays name4b",
                        room:"Room 4b",
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
                        room:"Room 5",
         				daytime:"Days,Timings"
        				},
            subjectInstructors:[        
            {
            title:'Course 5A', 
            tags: ['Coursename', 'Profname'],
            nameProf:"Displays name5A",
            room:"Room 5A",
            daytime:"Days,Timings"
            },
           {
            title:'Course 5B', 
            tags: ['Coursename', 'Profname'],
            nameProf:"Displays name5B",
            room:"Room 5B",
            daytime:"Days,Timings"
            }
            ],
            taNames:[
          	        {
   				    title:'Course 5a', 
         		    tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name5a",
                    room: "Room 5a",
         			daytime:"Days,Timings"
        			}, 
                    {
         			title:'Course 5b', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name5b",
        			room:"Room 5b",
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
                           room:"Room 6",
         			       daytime:"Days,Timings"
        					},
            subjectInstructors:[        
                {
          		title:'Course 6A', 
         		tags: ['Coursename', 'Profname'],
         		nameProf:"Displays name6A",
                room:"Room 6A",
         		daytime:"Days,Timings"
        		},
                {
         		title:'Course 6B', 
         		tags: ['Coursename', 'Profname'],
         		nameProf:"Displays name6B",
                room:"Room 6B",
         		daytime:"Days,Timings"
        		}
            ],
            taNames:[
                     {
         			title:'Course 6a', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name6a",
                    room:"Room 6a",
         			daytime:"Days,Timings"
        			}, 
                   {
         			title:'Course 6b', 
         			tags: ['Coursename', 'Profname'],
         			nameProf:"Displays name6b",
                    room:"Room 6b",
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
