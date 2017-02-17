angular.module('aplicacionFutbol').service('futbolService', ['$timeout', '$q', function($timeout, $q) {
    var futbolService = {};   

    futbolService.getJugadores = function() {        
        var defer = $q.defer();      
        
        // Simulacion llamada al servicio para obtener los jugadores
        $timeout(function(){           
            defer.resolve(JUGADORES);
        },3000);      
       
        return defer.promise;
    };

    futbolService.getEquipos = function(){
        var defer = $q.defer();
      
        // Simulacion llamada al servicio para obtener los equipos
        $timeout(function(){
            defer.resolve(EQUIPOS);
        },2000);      
      
        return defer.promise;
    };

    return futbolService;
}]);

var JUGADORES = [
    {id: 1, nombre:'Carlos Vela', rol: 'delantero'},
    {id: 2, nombre:'Gerard Moreno', rol: 'delantero'},
    {id: 3, nombre:'Iago Aspas', rol: 'delantero'},
    {id: 4, nombre:'Sergi Enrich', rol: 'delantero'},
    {id: 5, nombre:'Sergio León', rol: 'delantero'},
    {id: 6, nombre:'Florin Andone', rol: 'delantero'},
    {id: 7, nombre:'Sandro Ramírez', rol: 'delantero'},
    {id: 8, nombre:'Vitolo', rol: 'medio'},
    {id: 9, nombre:'Trigueros', rol: 'medio'},
    {id: 10, nombre:'Pedro León', rol: 'medio'},
    {id: 11, nombre:'Illarramendi', rol: 'medio'},
    {id: 12, nombre:'Roque Mesa', rol: 'medio'},
    {id: 13, nombre:'Marcos Llorente', rol: 'medio'},
    {id: 14, nombre:'Camacho', rol: 'medio'},
    {id: 15, nombre:'Jonathan Viera', rol: 'medio'},
    {id: 16, nombre:'Parejo', rol: 'medio'},
    {id: 17, nombre:'Raúl García', rol: 'medio'},
    {id: 18, nombre:'David López', rol: 'defensa'},
    {id: 19, nombre:'Yuri Berchiche', rol: 'defensa'},
    {id: 20, nombre:'Víctor Ruiz', rol: 'defensa'},
    {id: 21, nombre:'Michel Macedo', rol: 'defensa'},
    {id: 22, nombre:'Lejeune', rol: 'defensa'},
    {id: 23, nombre:'Theo Hernández', rol: 'defensa'},
    {id: 24, nombre:'Mariano Ferreira', rol: 'defensa'},
    {id: 25, nombre:'Rosales', rol: 'defensa'},
    {id: 26, nombre:'Oier', rol: 'defensa'},
    {id: 27, nombre:'Diego López', rol: 'portero'},
    {id: 28, nombre:'Sergio Asenjo', rol: 'portero'},
    {id: 29, nombre:'Sergio Rico', rol: 'portero'},
    {id: 30, nombre:'Pacheco', rol: 'portero'},
    {id: 31, nombre:'Adán', rol: 'portero'}
];

var EQUIPOS = [
    {id: 1, nombre: 'Real Madrid '},
    {id: 2, nombre: 'FC Barcelona'},
    {id: 3, nombre: 'Sevilla FC'},
    {id: 4, nombre: 'Atlético de Madrid'},
    {id: 5, nombre: 'Real Sociedad'},
    {id: 6, nombre: 'Villarreal CF'},
    {id: 7, nombre: 'SD Eibar'},
    {id: 8, nombre: 'Athletic Club'},
    {id: 9, nombre: 'RCD Espanyol'},
    {id: 10, nombre: 'RC Celta'},
    {id: 11, nombre: 'UD Las Palmas'},
    {id: 12, nombre: 'D. Alavés'},
    {id: 13, nombre: 'Real Betis'},
    {id: 14, nombre: 'Málaga CF'},
    {id: 15, nombre: 'Valencia CF '},
    {id: 16, nombre: 'RC Deportivo'},
    {id: 17, nombre: 'CD Leganés'},
    {id: 18, nombre: 'R. Sporting'},
    {id: 19, nombre: 'Granada CF'},
    {id: 20, nombre: 'CA Osasuna'}
];