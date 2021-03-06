// Definición de la aplicacion
angular.module('miAplicacionDePrueba', [])
    .controller('jugadoresController', [
        '$scope', 'futbolService',
        function($scope, futbolService) {

            $scope.init = function() {
                $scope.alineacion = [];
                $scope.jugadores = futbolService.getJugadores();
                $scope.jugadorSeleccionado = "";
            };
          
            $scope.alinear = function(posJugador){
                if(posJugador in $scope.jugadores && 
                   !isInArray($scope.jugadores[posJugador], $scope.alineacion)){
                    $scope.alineacion.push($scope.jugadores[posJugador]);
                }
            };
          
            $scope.eliminar = function(index){
                $scope.alineacion.splice(index, 1);
            };

            var isInArray = function(value, array) {
                return array.indexOf(value) > -1;
            };

        }
    ])
    .controller('entrenadoresController', [
        'futbolService',
        function(futbolService) {
            var vm = this;

            vm.init = function() {
                vm.entrenadores = futbolService.getEntrenadores();
                vm.entrenadorSeleccionado = "";
            };

        }
    ])
    .service('futbolService', ['$http', '$q', function($http, $q) {
        var futbolService = {};

        var JUGADORES = [
            'Carlos Vela',
            'Gerard Moreno',
            'Iago Aspas',
            'Sergi Enrich',
            'Sergio León',
            'Florin Andone',
            'Sandro Ramírez',
            'Vitolo',
            'Trigueros',
            'Pedro León',
            'Illarramendi',
            'Roque Mesa',
            'Marcos Llorente',
            'Camacho',
            'Jonathan Viera',
            'Parejo',
            'Raúl García',
            'David López',
            'Yuri Berchiche',
            'Víctor Ruiz',
            'Michel Macedo',
            'Lejeune',
            'Theo Hernández',
            'Mariano Ferreira',
            'Rosales',
            'Oier',
            'Diego López',
            'Sergio Asenjo',
            'Sergio Rico',
            'Pacheco',
            'Adán'
        ];

        var ENTRENADORES = [
            {id: 1,  nombre: 'Abelardo Fernández'},
            {id: 2,  nombre: 'Asier Garitano'},
            {id: 3,  nombre: 'Diego Pablo Simeone'},
            {id: 4,  nombre: 'Eduardo Berizzo'},
            {id: 5,  nombre: 'Enrique Martín'},
            {id: 6,  nombre: 'Eusebio Sacristán'},
            {id: 7,  nombre: 'Fran Escribá'},
            {id: 8,  nombre: 'Gaizka Garitano'},
            {id: 9,  nombre: 'Gustavo Poyet'},
            {id: 10, nombre: 'Jorge Sampaoli'},
            {id: 11, nombre: 'José Luis Mendilibar'},
            {id: 12, nombre: 'Juande Ramos'},       
            {id: 13, nombre: 'Luis Enrique'},
            {id: 14, nombre: 'Paco Jémez'},
            {id: 15, nombre: 'Pako Ayestarán'},
            {id: 16, nombre: 'Quique Sánchez Flores'},
            {id: 17, nombre: 'Quique Setién'},
            {id: 18, nombre: 'Zinedine Zidane'}
        ];

        futbolService.getJugadores = function() {
            return JUGADORES;
        };

        futbolService.getEntrenadores = function() {
            return ENTRENADORES;
        };

        return futbolService;
    }]);



// Arranque de la aplicacion
angular
    .bootstrap(document, ['miAplicacionDePrueba']);