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

console.log(objeto);
console.log(JSON.stringify(objeto));
console.log(arraySimple);
console.log(arrayComplejo);

console.log("");

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
console.log(ref1.matricula);
ref1.marca = "Seat";
ref1.modelo = "Ibiza";
console.log(coche.marca + " " + coche.modelo);

/* Ejemplo referencias en arrays */
ref2 = listaCompra;
ref2[0] = "macarrones";
console.log(listaCompra[0]);

console.log("");

/* El operador '=' en tipos primitivos o simples hace copia, no referencia */
ref3 = numero;
console.log(ref3);
ref3 = 879871;
console.log(numero);
console.log(ref3);

console.log("");

/* Implementando mapas */
var mapa = {
  "665464873R" : "Pepe",
  "071403711Z" : "Manuel",
  "222222511J" : "Lucia"  
};

console.log(mapa["665464873R"]);
console.log("222222511J" in mapa);
console.log("000000000G" in mapa);
console.log(mapa.hasOwnProperty("665464873R"));
console.log(mapa.hasOwnProperty("777788970R"));

console.log("");

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

console.log(objetoCaotico["499877-448-05"]);
console.log(objetoCaotico.elemento);
console.log(objetoCaotico[1]["nombre"]);
console.log(objetoCaotico[1].apellidos);
console.log(objetoCaotico.persona["nombre"]);
console.log(objetoCaotico.persona.apellidos);
console.log(objetoCaotico["persona"]["apellidos"]);
console.log(objetoCaotico["persona"]["apellidos"]);
//objetoCaotico.saludar("Maria");
//objetoCaotico.despedirse("Sara");
