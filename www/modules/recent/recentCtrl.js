var logged = angular.module('logged');

logged.controller('recentCtrl',['$scope', '$stateParams', 'Constant', 'classService', '$ionicPopup', '$ionicLoading',
 function($scope, $stateParams, Constant, classService, $ionicPopup, $ionicLoading) {
     
//De int a bool, because i can
$scope.model = {hasClass: $stateParams.classId};
console.log($scope.model.hasClass == true)
}]);