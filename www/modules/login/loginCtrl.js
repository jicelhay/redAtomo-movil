var login = angular.module('login',[]);

login.controller('loginCtrl',['$scope', '$state', '$rootScope', '$ionicLoading', '$ionicPopup',
 'loginService', '$ionicModal', 'Constant',
 function($scope, $state, $rootScope, $ionicLoading, $ionicPopup, loginService, $ionicModal, Constant) {

    $ionicLoading.show();
    if(localStorage.idSession){
        $rootScope.idSession = localStorage.idSession;
        //$state.go('logged.main')
    }
    $ionicLoading.hide();
    
    $scope.model = {password: null, name: null, email: null};

    $ionicModal.fromTemplateUrl('modules/login/sign-up-modal.html', {
        scope: $scope,
        animation: 'slide-in-up'
    }).then(function(modal) {
        $scope.signUpModal = modal;
    });

    // Metodos de scope
    $scope.signIn = function(){
        if(!$scope.model.email || !$scope.model.password) return;
        $ionicLoading.show();
        loginService.signIn($scope.model.username,$scope.model.password)
        .then(function(){
            $state.go('logged.recent');
        })
        .catch(function(){
               $ionicPopup.alert({
                title: 'Error',
                template: Constant.errorMessage
            });  
        })
        .finally($ionicLoading.hide);
    }
    $scope.openSignUpModal = function() {
        $scope.signUpModal.show();
    };
    
    $scope.closeSignUpModal = function() {
        $scope.signUpModal.hide();
    };
    
    $scope.signUp = function() {
        if(!$scope.model.name || !$scope.model.password || !$scope.model.email ) return;
        
        $scope.closeSignUpModal();
        $ionicLoading.show();
        loginService.signUp($scope.model.name,$scope.model.password,$scope.model.email)
            .then(function(idSession){
                
            })
            .catch(function(){
                $ionicPopup.alert({
                title: 'Error',
                template: Constant.errorMessage
            });  
            })
            .finally($ionicLoading.hide);
    }

    
}]);