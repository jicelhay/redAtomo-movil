var logged = angular.module('logged');
logged.controller('newsCtrl',['$scope', '$stateParams', 'Constant', 'classService', '$ionicPopup', '$ionicLoading', 'postService',
    function($scope, $stateParams, Constant, classService, $ionicPopup, $ionicLoading, postService) {

        $scope.model = {posts: [], hasClass: $stateParams.classId, postsLoaded: false, selectedClass: null};
        $scope.model.selectedClass = classService.getClassTittlefromId($scope.model.hasClass);

        if($scope.model.hasClass !== '0'){
            postService.getPosts($scope.model.hasClass)
                .then(function(data) {
                    $scope.model.posts = data;
                })
                .catch(function(){
                    $ionicPopup.alert({
                        title: 'Error',
                        template: Constant.errorMessage
                    });
                })
                .finally(function(){
                    $scope.model.postsLoaded = true;
                    ionicLoading.hide();
                });
        }
        else{ $scope.model.postsLoaded = true; }
    }]);