var logged = angular.module('logged',[]);

logged.controller('loggedCtrl',['$scope', 'Constant', 'clientService', '$ionicModal', 'classService',
 function($scope,  Constant, clientService, $ionicModal, classService) {
     
      $scope.classes = classService.getClasses();
             
      $ionicModal.fromTemplateUrl('modules/logged/config-modal.html', {
        scope: $scope,
        controller: 'configCtrl',
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.configModal = modal;
    });
     
      $scope.openConfig = function() {
        $scope.configModal.show();
    };
    
    $scope.closeConfig = function() {
        $scope.configModal.hide();
    };
     

}]);