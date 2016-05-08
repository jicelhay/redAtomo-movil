var logged = angular.module('logged');

logged.controller('configCtrl',['$scope', 'Constant', 'classService', '$ionicPopup', '$ionicLoading',
 function($scope,  Constant, classService, $ionicPopup, $ionicLoading) {
     
 $scope.model = {code: null};
      
 $scope.addClass = function(){     
     if(!$scope.model.code) return;
   
     $ionicLoading.show();
     classService.addClass($scope.model.code)
        .then(function(classes){
            $scope.model.code = '';
            $scope.classes = classes;
        })
        .catch(function(){
            $ionicPopUp.alert({template: Constant.errorMessage});
        })
        .finally($ionicLoading.hide);
 };
 
 $scope.deleteClass = function(clientClass){
     $ionicLoading.show();
     classService.deleteClass(clientClass)
        .then(function(classes){
            $scope.classes = classes;
        })
        .catch(function(){
            $ionicPopUp.alert({template: Constant.errorMessage});            
        })
        .finally($ionicLoading.hide);
 };

}]);