/* Definiciones objeto y array */
var objeto = {
  atributo : "valor del atributo del objeto"
};
var arraySimple = [1,4,7,9,3];
var arrayComplejo = [
  "texto", null, undefined, 
  function(){ alert("Hola!");},
  1,8.97,false, true, 'ejemplo'
];

println(objeto);
println(JSON.stringify(objeto));
println(arraySimple);
println(arrayComplejo)
salto();

/* Ejercicios con referencias */
var coche = {
      matricula : "05984-RTY",
      marca : "Audi",
      modelo : "A4"
    },
    listaCompra = ["leche","agua","cereales","aceite", "huevos"],
    numero = 10,
    ref1 = null, ref2 = null, ref3 = null;

/* Ejemplo referencias en objetos */
ref1 = coche;
println(ref1.matricula);
ref1.marca = "Seat";
ref1.modelo = "Ibiza";
println(coche.marca + " " + coche.modelo);

/* Ejemplo referencias en arrays */
ref2 = listaCompra;
ref2[0] = "macarrones";
println(listaCompra[0]);

salto();

/* El operador '=' en tipos primitivos o simples hace copia, no referencia */
ref3 = numero;
println(ref3);
ref3 = 879871;
println(numero);
println(ref3);

salto();

/* Implementando mapas */
var mapa = {
  "665464873R" : "Pepe",
  "071403711Z" : "Manuel",
  "222222511J" : "Lucia"  
};

println(mapa["665464873R"]);
println("222222511J" in mapa);
println("000000000G" in mapa);
println(mapa.hasOwnProperty("665464873R"));
println(mapa.hasOwnProperty("777788970R"));

salto();

var objetoCaotico = {
  1 : {
    nombre : "Juan",
    apellidos: "Lopez"
  },
  persona : {
    nombre : "Manolo",
    apellidos : "Sanchez"
  },
  "499877-448-05" : "Codigo ejemplo",
  "elemento" : 998705,
  "saludar" : function(nombre){
    alert("Hola " + nombre );
  },
  despedirse : function(nombre){
    alert("Hasta pronto " + nombre);
  }
};

println(objetoCaotico["499877-448-05"]);
println(objetoCaotico.elemento);
println(objetoCaotico[1]["nombre"]);
println(objetoCaotico[1].apellidos);
println(objetoCaotico.persona["nombre"]);
println(objetoCaotico.persona.apellidos);
println(objetoCaotico["persona"]["apellidos"]);
println(objetoCaotico["persona"]["apellidos"]);
//objetoCaotico.saludar("Maria");
//objetoCaotico.despedirse("Sara");


/* Funciones auxiliares para simplificar la visualizacion del ejercicio */
function println(valor){
    $("#pagina").append("<div>" + valor + "</div>"); 
}
function salto(){
  //$("#pagina").append("<br />");
  $("#pagina").append('<span style="border-top:1px solid #ddd;width:100%; height:1px;display:block;margin:10px 0"></span>');
}
