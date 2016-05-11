var login = angular.module('login');

login.factory('loginService',['$http', '$timeout', 'clientService', 'classService', '$ionicHistory',
function($http, $timeout, clientService, classService, $ionicHistory) {
    
    var publicMethods = {};
    var randomPerson = {name:'Pedro Saratscheff', sessionId:'juanlalleva', email:'pedro@uc.cl'}
    
    publicMethods.signIn = function(email,password){
        return $timeout(function(){
            clientService.setClient(randomPerson);
            //aqui se deben recuperar sus clases
            var classes = []
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
    
    publicMethods.logOut = function(){
        return $timeout(function(){
            $ionicHistory.clearHistory();
            $ionicHistory.clearCache();
            clientService.deleteClient();
            classService.deleteClasses();
            $ionicHistory.nextViewOptions({
            disableBack: true,
            historyRoot: true
            });
        },400);
    }
    
    return publicMethods;
    
    
}]);