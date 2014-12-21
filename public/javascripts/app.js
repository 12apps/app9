var resourceApp = angular.module('resourceApp', [
  'ui.router'
]);


//
//app.controller('MainCtrl', ['$http', '$scope', function($http, $scope){
//  $scope.activeTags = [];
//  $http.get('https://api.github.com/users').success( function(data){
//    console.log(data);
//    $scope.datas = data;
//  });
//
//}]);
//
//app.filter('selectedTags', function() {
//  return function(tasks, tags) {
//    return tasks.filter(function(task) {
//
//      for (var i in task.Tags) {
//        if (tags.indexOf(task.Tags[i]) != -1) {
//          return true;
//        }
//      }
//      return false;
//
//    });
//  };
//});
