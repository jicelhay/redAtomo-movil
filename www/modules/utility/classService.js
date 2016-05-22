var login = angular.module('logged');

login.factory('classService',[ '$timeout', function($timeout) {
    
    var publicMethods = {};
    var classes;
 
    publicMethods.setClasses = function(clientClasses){
        classes = clientClasses;
    };
    publicMethods.getClasses = function(){
        if(!classes){
            classes = [];
        }
        return classes;
    };
    publicMethods.addClass = function(code){
        //TODO setearlo en backend (PAJA)
        return $timeout(function(){
            if(code === '1234'){
                classes.push({id: 1 , name:'IV°A', school: 'DSLA'});
            }
            else{
                classes.push({id: 2 , name:'2°C', school: 'DSLA'});    
            }
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
    
    publicMethods.deleteClasses = function(){
        classes = [];
    };

    publicMethods.getClassTittlefromId = function(id){
        for(var i = 0;i<classes.length;i++){
            if(classes[i].id == id){
                return classes[i].name + ' - ' + classes[i].school;
            }
        }
    };
   
    
    return publicMethods;
    
}]);