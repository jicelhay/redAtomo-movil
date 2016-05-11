var login = angular.module('login');

login.factory('clientService',[ function() {
    
    var publicMethods = {};
    var clientInfo = {};
    
    publicMethods.setClient = function(client){
       clientInfo = client;
       localStorage.setItem('name', clientInfo.name);
       localStorage.setItem('email',clientInfo.email);
       localStorage.setItem('sessionId',clientInfo.sessionId);
    };
    
    publicMethods.getClient = function(){
         if(!clientInfo){
             clientInfo.name = localStorage.getItem('name');
             clientInfo.email = localStorage.getItem('email');
             clientInfo.sessionId = localStorage.getItem('sessionId');
         }
         return clientInfo;
    };
    
    publicMethods.deleteClient = function(){
        clientInfo = {};
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        localStorage.removeItem('sessionId');
    }
    
    return publicMethods;
    
}]);