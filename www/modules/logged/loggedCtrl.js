var logged = angular.module('logged',[]);

logged.controller('loggedCtrl',['$scope', '$state', '$stateParams', 'Constant', 'clientService',
 '$ionicModal', '$ionicPopup', '$ionicLoading', 'classService', 'loginService', '$ionicHistory',
 function($scope, $state, $stateParams, Constant, clientService, $ionicModal,$ionicPopup, $ionicLoading, 
   classService, loginService, $ionicHistory ) {
     
      $scope.model = {classId: $stateParams.classId};
      $scope.model.classes = classService.getClasses();
  
    
       
      $ionicModal.fromTemplateUrl('modules/logged/config-modal.html', {
        scope: $scope,
        controller: 'configCtrl',
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.configModal = modal;
    });
     
     //Metodos scope
     
    $scope.openConfig = function() {
      $scope.configModal.show();
    };
    
    $scope.closeConfig = function() {
      $ionicHistory.nextViewOptions({
        historyRoot: true
        });
      var classLength = $scope.model.classes.length;
      if(classLength === 0){
        $scope.model.classId = 0;
        $state.go('logged.recent',{classId: 0});
        $scope.model.selectedClass = null;
      }
      else{
        $scope.model.selectedClass = $scope.model.classes[classLength- 1];
        console.log($scope.model.selectedClass);
        $scope.model.classId = $scope.model.classes[classLength- 1].id;
        $state.go('logged.recent',{classId: $scope.model.classId});    
      }  
      $scope.configModal.hide();
    };
    
    $scope.goToClass = function(clientClass){
      $scope.model.selectedClass = clientClass;
      $scope.model.classId = clientClass.id;
      $ionicHistory.nextViewOptions({
        historyRoot: true
        });
      $state.go('logged.recent',{classId: clientClass.id});
    }
    
    $scope.news = function(){
        $ionicHistory.nextViewOptions({
            historyRoot: true
        });
      $state.go('logged.news',{classId: $scope.model.classId});   
    };
    
    $scope.multimedia = function(){
      $state.go('logged.multimedia',{classId: $scope.model.classId})   
    };
    
     $scope.recent = function(){ 
      $state.go('logged.recent',{classId: $scope.model.classId})   
    };
    
    $scope.logOut = function(){
        $ionicLoading.show();
        loginService.logOut()
        .then(function(){    
             $state.go('login');
        })
        .catch(function(){
            $ionicPopup.alert({template: Constant.errorMessage});
        })
        .finally($ionicLoading.hide);
    }
     

}]);