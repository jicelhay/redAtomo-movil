var login = angular.module('login');

login.factory('loginService',['$http', '$timeout', 'clientService', 
function($http, $timeout, clientService) {
    
    var publicMethods = {};
    var fakeSessionId  = "pedroql"
    
    publicMethods.signIn = function(email,password){
        return $timeout(function(){
            clientService.setClient('no info yet');
        },400)
    };
    
    publicMethods.signUp = function(name,password,email){
         return $timeout(function(){
            clientService.setClient('no info yet');
        },400)
    };
    
    return publicMethods;
    
    
}]);