var logged = angular.module('logged',[]);

logged.controller('loggedCtrl',['$scope', '$state', 'Constant', 'clientService', '$ionicModal', 'classService',
 function($scope, $state, Constant, clientService, $ionicModal, classService) {
     
      $scope.classes = classService.getClasses();
      console.log($scope.classes);
             
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
        $state.go('logged.recent',{classId: 4})
    }
     

}]);