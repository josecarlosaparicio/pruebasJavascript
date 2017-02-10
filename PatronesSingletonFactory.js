var Calculadora = (function() {

    var CalculadoraSingleton = function(type) {
        if (!CalculadoraSingleton.instance) {
            CalculadoraSingleton.instance = CalculadoraFactory(type);
        }
        return CalculadoraSingleton.instance;
    };

    var CalculadoraFactory = function(type) {

        if (type === "simple") {
            return {
                resultado: 0,
                operacion: function(tipo, valor1, valor2) {
                    switch (tipo) {
                        case 'suma':
                            this.resultado = valor1 + valor2;
                            break;
                        case 'resta':
                            this.resultado = valor1 - valor2;
                            break;
                        case 'multiplicacion':
                            this.resultado = valor1 * valor2;
                            break;
                        case 'division':
                            this.resultado = valor1 / valor2;
                            break;
                    }
                }
            };
        }
      
        if (type === "cientifica") {
            return {};
        }
    };

    return CalculadoraSingleton;
})();


calculadora1 = new Calculadora("simple");
calculadora2 = new Calculadora("simple");

calculadora1.operacion('suma',6,2);
console.log(calculadora2.resultado);
