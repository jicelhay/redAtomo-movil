var login = angular.module('logged');

login.factory('postService',[ '$timeout', function($timeout) {
    
    var publicMethods = {};
    
    //posts de prueba
    var posts1 = [{title: 'Paseo de curso', body: 'El paseo de curso se cancelará por mal tiempo. Agradezco su comprensión y les aseguro '+
           'que no fue una decisión facil. Muchos Saludos.', author: 'Juan Celhay', date: 'Ayer'},{title: 'Convivencia', body: 'Como' +
           'seguramente sus hijos habrán comentado, tenemos una convivencia con toda la familia la próxima semana en el patio del colegio.'+
           'El tema que trataremos será Vida Sana, por lo que hago enfasis en que no traigan comida chatarra ni bebidas con alto' +
           ' contenido de azucar ese día. Nos vemos!', author: 'Juan Celhay', date: 'Hace unos días'}];
    
    var posts2 = [{title: 'Bienvenidos apoderados', body: 'Este clase virtual será el medio de comunicación que usaremos' + 
        'durante el semestre para que se informen de las actividades que vamos haciendo con sus hijos. Si tienen alguna pregunta' + 
        'o sugerencia haganmelo saber llamandome a mi celular: 133', author: 'Esteban Antonio', date: 'Hace 2 semanas'},
        {title: 'Alumno suspendido', body: 'Como saben, el alumno Pablo Berrios ha sido suspendido del colegio por reiteradas' + 
        'agresiones al personal de limpieza. Espero que su comportamiento nos ayude a reflexionar sobre la educación que le damos a ' +
        'nuestros hijos en la casa, que estén muy bien.', author: 'Esteban Antonio', date: 'Hace unas horas'}];

    publicMethods.getPosts = function(classId){
        
        return $timeout(function(){
            console.log(classId);
            if(classId === '1'){
            return posts1;
        }
            return posts2;
        },300);
    };
   
    return publicMethods;
    
}]);