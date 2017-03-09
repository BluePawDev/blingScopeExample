var myApp = angular.module( 'myApp', [] );

myApp.controller( 'whateverController', [ '$scope', '$http', function( $scope, $http ){
  console.log( 'NG' );
  // an array
  $scope.things = [];

  $scope.addInput = function(){
    console.log( 'in addInput', $scope.inputer );
    $scope.things.push( $scope.inputer );
    console.log( $scope.things );
  } // end addInput
}]);
