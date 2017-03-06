angular.module('aplicacionFutbol').service('futbolService', ['$http', '$q', function($http, $q) {
    var futbolService = {},
        PATH_REL = "./data/";

    futbolService.getJugadores = function(idEquipo) {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: PATH_REL + idEquipo + ".json"
        }).then(function(data) {
            defer.resolve(data.data);
        }, function(error) {
            defer.reject(error);
        });

        return defer.promise;
    };

    futbolService.getEquipos = function() {
        var defer = $q.defer();
        $http({
            method: 'GET',
            url: PATH_REL + "equipos.json"
        }).then(function(data) {
            defer.resolve(data.data);
        }, function(error) {
            defer.reject(error);
        });

        return defer.promise;
    };

    return futbolService;
}]);