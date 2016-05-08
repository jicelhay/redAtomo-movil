var login = angular.module('login');

login.factory('clientService',[ function() {
    
    var publicMethods = {};
    var clientInfo = {};
    
    publicMethods.setClient = function(client){
       clientInfo = client;
    };
    
    publicMethods.getClient = function(){
         clientInfo = {name: 'Diego Fernandez', email: 'dfernan@xxx.com', sessionId: 'pedroql'};
         return clientInfo;
    };
    
    return publicMethods;
    
}]);