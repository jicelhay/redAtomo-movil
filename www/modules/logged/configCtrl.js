var logged = angular.module('logged');

logged.controller('configCtrl',['$scope','$rootScope' ,'Constant', 'classService', '$ionicPopup', '$ionicLoading',
 function($scope,$rootScope ,Constant, classService, $ionicPopup, $ionicLoading) {
     
 $scope.model.code = null;
      
   
 $scope.addClass = function(){     
     if(!$scope.model.code) return;
   
     $ionicLoading.show();
     classService.addClass($scope.model.code)
        .then(function(classes){
            $ionicPopup.alert({template: 'El curso se ha agregado con exito'});
            $scope.model.code = '';
            $scope.model.classes = classes;      
        })
        .catch(function(){
            $ionicPopup.alert({template: Constant.errorMessage});
        })
        .finally($ionicLoading.hide);
 };
 
 $scope.deleteClass = function(clientClass){
     $ionicLoading.show();
     classService.deleteClass(clientClass)
        .then(function(classes){
            $scope.model.classes = classes;
            $scope.$emit('reloadClass');  
        })
        .catch(function(){
            $ionicPopUp.alert({template: Constant.errorMessage});            
        })
        .finally($ionicLoading.hide);
 };

}]);