angular.module('aplicacionFutbol').controller('equiposController', [
    '$scope', 'futbolService',
    function($scope, futbolService) {

        $scope.muestraCargando = true;

        $scope.init = function() {
            futbolService.getEquipos().then(function(data) {
                $scope.muestraCargando = false;
                $scope.equipos = data;
            });
        };

    }
]);