// Definición de la aplicacion
angular.module('aplicacionFutbol', ['ui.router', 'oc.lazyLoad'])
    // Configuracion de la aplicacion
    .config(['$stateProvider', function($stateProvider) {

        $stateProvider
            .state({
                name: 'jugadores',
                url: '/jugadores/:idEquipo',
                templateUrl: 'views/jugadores/jugadores.view.html',
                params : {
                    equipo : null
                },
                resolve: {
                    loadDependecesCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'services/futbol.service.js',
                            'views/jugadores/jugadores.controller.js'
                        ]);
                    }]
                }
            })
            .state({
                name: 'equipos',
                url: '/equipos',
                templateUrl: 'views/equipos/equipos.view.html',               
                resolve: {
                    loadDependecesCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            'services/futbol.service.js',
                            'views/equipos/equipos.controller.js'
                        ]);
                    }]
                }
            });
    }]);


angular.bootstrap(document, ['aplicacionFutbol']);