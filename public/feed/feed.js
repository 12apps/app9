resourceApp.controller('feedController', function($http, $scope){
  $scope.feed = [] ;
  $http.get('/api/v1/feed').success(function(resources){
    $scope.feed = resources; 
  });
  $scope.submitForm = function(){
  	$http.post('/api/v1/user', $scope.user).success(function(user){

  		$http.post('/api/v1/user/'+user._id+'/resources', $scope.resource).success(function(rsc){
  			$scope.feed.push(rsc);
  		})
  	})
  }
});

resourceApp.config(function($stateProvider, $locationProvider){
	$locationProvider.html5Mode(true);
  $stateProvider.state('feed' , {
    url: '/' ,
    templateUrl: '/feed/feed.html',
    controller: 'feedController'
  
  })

})
