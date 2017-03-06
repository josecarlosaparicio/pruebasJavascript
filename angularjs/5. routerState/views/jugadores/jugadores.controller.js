angular.module('aplicacionFutbol').controller('jugadoresController', [
    '$scope', '$state', '$stateParams', '$parse', 'futbolService',
    function($scope, $state, $stateParams, $parse, futbolService) {

        $scope.muestraCargando = true;

        $scope.init = function() {
            var idEquipo = $parse('equipo.code')($stateParams);
            $scope.nombreEquipo = $parse('equipo.name')($stateParams);

            futbolService.getJugadores(idEquipo).then(function(data) {
                $scope.muestraCargando = false;
                $scope.jugadores = data.jugadores;
            });
        };

        $scope.volver = function() {
            $state.go('equipos');
        };
    }
]);