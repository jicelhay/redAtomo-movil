var login = angular.module('logged');

login.factory('classService',[ '$timeout', function($timeout) {
    
    var publicMethods = {};
    var classes = [];
 
    publicMethods.setClasses = function(clientClasses){
        classes = clientClasses;
    };
    publicMethods.getClasses = function(){
        return classes;
    };
    publicMethods.addClass = function(code){
        //TODO setearlo en backend (PAJA)
        return $timeout(function(){
            classes.push({id: 1 , name:'IV°A', school: 'DSLA'});
            return classes;
        },600);    
    };
    publicMethods.deleteClass = function(clientClass){
        //TODO setearlo en backend (PAJA)
         return $timeout(function(){
            var index = classes.indexOf(clientClass);
            if (index > -1) {
                classes.splice(index, 1);
            }
            return classes;
        },600); 
    };
   
    
    return publicMethods;
    
}]);