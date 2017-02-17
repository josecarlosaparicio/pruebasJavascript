angular.module('aplicacionFutbol').directive('cargando', function(){
    return {
        template : '<div data-ng-if="active"><i class="fa fa-circle-o-notch fa-spin fa-fw"></i> Cargando</div>',
        scope : {
            active : '='
        }
    }
});