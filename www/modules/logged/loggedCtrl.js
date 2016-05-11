var logged = angular.module('logged',[]);

logged.controller('loggedCtrl',['$scope', '$state', '$stateParams', 'Constant', 'clientService',
 '$ionicModal', '$ionicPopup', '$ionicLoading', 'classService', 'loginService',
 function($scope, $state, $stateParams, Constant, clientService, $ionicModal,$ionicPopup, $ionicLoading, classService, loginService) {
     
      $scope.model = {classId: $stateParams.classId};
      $scope.model.classes = classService.getClasses();
       console.log($scope.model.classes);
      console.log($scope.model.classId) 
      
      $scope.$on('reload',function(){  
          console.log('llegue'); 
       $scope.model.classes = classService.getClasses();
       console.log($scope.model.classes);
      });
            
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
        $scope.configModal.hide();
    };
    
    $scope.goToClass = function(clientClass){
     $scope.model.classId = clientClass.id;
     $state.go('logged.recent',{classId: clientClass.id})
    }
    
    $scope.news = function(){
        console.log($scope.model.classId)
     $state.go('logged.news',{classId: $scope.model.classId})   
    };
    
    $scope.multimedia = function(){
        console.log($scope.model.classId)
    $state.go('logged.multimedia',{classId: $scope.model.classId})   
    };
    
     $scope.recent = function(){
         console.log($scope.model.classId)
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