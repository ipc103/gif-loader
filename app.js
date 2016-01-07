var myApp = angular.module('myApp', []);

myApp.controller('mainController', ['$scope','$timeout', '$filter', '$http', function($scope, $timeout, $filter, $http) {

  $scope.search = '';
  $scope.formattedSearch = function(){
      return $scope.search.replace(/ /g, "+");
  }
  $scope.url = function(){
    return 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=' + $scope.formattedSearch()
  }

    $scope.loadGif = function(){
      $http.get($scope.url()).then(function(response){
        $scope.gif = response.data.data[0];
      })
    }





}]);
