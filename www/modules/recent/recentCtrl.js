var logged = angular.module('logged');

logged.controller('recentCtrl',['$scope', '$stateParams', 'Constant', 'classService', '$ionicPopup', '$ionicLoading', 'postService',
 function($scope, $stateParams, Constant, classService, $ionicPopup, $ionicLoading, postService) {
     
//De int a bool, because i can.
$scope.model = {posts: [], hasClass: $stateParams.classId, postsLoaded: false};

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