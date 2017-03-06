angular.module('aplicacionFutbol').directive('cargando', function(){
    return {
        template : '<div data-ng-if="active"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Cargando</div>',
        scope : {
            active : '='
        }
    }
});


angular.module('aplicacionFutbol').directive('escudo', function(){
    return {
        template : '<span data-ng-if="equipo && equipo.crestUrl"><img class="escudo pull-right" src="{{equipo.crestUrl}}" /></span>',
        scope : {
            equipo : '='
        }
    }
});


