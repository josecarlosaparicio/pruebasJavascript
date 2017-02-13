// Definición de la aplicacion
angular
  .module('miAplicacionDePrueba',[])
  .controller('jugadoresController', ['$scope', function($scope){    
      $scope.jugador = "Andrés Iniesta";
  }])
  .controller('entrenadoresController', function(){    
      this.entrador = "Claudio Ranieri";
  });

// Arranque de la aplicacion
angular
  .bootstrap(document, ['miAplicacionDePrueba']);