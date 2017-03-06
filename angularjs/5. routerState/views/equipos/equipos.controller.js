angular.module('aplicacionFutbol').controller('equiposController', [
    '$scope', '$state', 'futbolService',
    function($scope, $state, futbolService) {

        $scope.muestraCargando = true;

        $scope.init = function() {
            futbolService.getEquipos().then(function(data) {
                $scope.muestraCargando = false;
                $scope.equipos = data.teams;                
            });
        };

        $scope.verJugadores = function(equipo) {
            $state.go('jugadores', {                
                'equipo': equipo
            });
        };
    }
]);