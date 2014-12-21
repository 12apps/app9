resourceApp.controller('feedController', function($http, $scope){
  $scope.feed = [] ;
  $http.get('/api/v1/feed').success(function(resources){
    $scope.feed = resources; 
  });
});

resourceApp.config(function($stateProvider){
  $stateProvider.state('feed' , {
    url: '/feed' ,
    templateUrl: '/feed/feed.html',
    controller: 'feedController'
  
  })

})
