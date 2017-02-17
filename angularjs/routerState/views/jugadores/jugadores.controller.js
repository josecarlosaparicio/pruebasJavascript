angular.module('aplicacionFutbol').controller('jugadoresController', [
    '$scope', 'futbolService',
    function($scope, futbolService) {

        $scope.muestraCargando = true;

        $scope.init = function() {
            futbolService.getJugadores().then(function(data) {
                $scope.muestraCargando = false;
                $scope.jugadores = data;
            });
        };

    }
]);