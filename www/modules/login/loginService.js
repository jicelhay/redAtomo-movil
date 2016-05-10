var login = angular.module('login');

login.factory('loginService',['$http', '$timeout', 'clientService', 'classService', 
function($http, $timeout, clientService, classService) {
    
    var publicMethods = {};
    var randomPerson = {name:'Pedro Saratscheff', sessionId:'juanlalleva', email:'pedro@uc.cl'}
    
    publicMethods.signIn = function(email,password){
        return $timeout(function(){
            clientService.setClient(randomPerson);
            var classes = [{id: 1 , name:'IV°A', school: 'DSLA'}];
            classService.setClasses(classes);
            var classId;
            if(classes.length > 0){
                classId = classes[0].id
            }
            else{
                classId = 0;
            }
            return classId;
        },500)
    };
    
    publicMethods.signUp = function(name,password,email){
         return $timeout(function(){
            clientService.setClient(randomPerson);
            classService.setClasses([]);
        },500);
    };
    
    return publicMethods;
    
    
}]);